const express = require('express');
const router = express.Router();
const models = require('../../models');
const Card = models.card;
const Priority = models.priority;
const Status = models.status;
const User = models.user;
const Sequelize = models.Sequelize;


router.get('/', (req, res) => {
  return Card.findAll({
    include: [
      {
        model: User,
        as: 'creator',
      }, {
        model: User,
        as: 'assignee',
      }, {
        model: Status,
        as: 'status'
      }, {
        model: Priority,
        as: 'priority'
      }
    ]
  })
  .then ((cards) =>{
    res.json(cards);
  })
  .catch((err) => {
    throw new Error(err);
  })
})

router.post('/', (req, res) => {
  console.log(req.body)
  return Card.create({
    title: req.body.title,
    created_by_id: req.body.created_by_id,
    assigned_to_id: req.body.assigned_to_id,
    priority_id: req.body.priority_id,
    status_id: 3
  })
  .then((card) => {
    return Card.findOne({
      where: {
        id: card.id
      },
      include: [
        {
          model: User,
          as: 'creator',
        }, {
          model: User,
          as: 'assignee',
        }, {
          model: Status,
          as: 'status'
        }, {
          model: Priority,
          as: 'priority'
        }
      ]
    })
    .then ( (cardItem) => {
      return res.json(cardItem);
    })
  })
  .catch((err) => {
    console.log(err);
  })
});

//ooor use findById...

router.get('/users', (req, res) => {
  return User.findAll({
    include: [
      {model: Card, as: 'cards'},
      {model: Card, as: 'tasks'}
    ]
  })
    .then(users => {
      return res.json(users);
    });
});

router.get('/:id', (req, res) => {
  console.log(req.params)
  const cardId = req.params.id
  console.log('ROUTER GET ajkshdakjshdajkshd',cardId);
  return Card.findById(cardId)
  .then( (card) => {
    res.json(card)
  })
})


router.delete('/:id', (req, res) => {
  console.log('FROM DELETE')
  const cardId = req.params.id
  return Card.destroy({
    where: {
      id: cardId
    }
  }) // it will return an array with the value of ....
  .then( (response) => {
    res.json({id: cardId})
  })
})


module.exports = router;

