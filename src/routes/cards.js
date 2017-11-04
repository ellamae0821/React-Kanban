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
    return Card.findOne({include: [{
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
      }], where: {
        id: card.id
      }
    })
    .then ( (cardItem) => {
      return res.json(cardItem);
    })
  })
  .catch((err) => {
    console.log(err);
  })
});


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

module.exports = router;


/*

router.post('/cards', (req, res) => {

let title = req.body.title;
let priority = req.body.priority_id;
let status = 3;
let assignedTo = req.body.assignedTo;

return Card.create({ title: title, priority: priority, status: status, assigned_to: assignedTo })
.then(newCard => {
return res.json(newCard);
});
}*/
/*

router.post('/', (req,res) =>{
console.log(req.body);
Card.create( {
"name" : req.body.name,
"priority" : req.body.priority,
"status" : req.body.status,
"assigned_to" : req.body.assigned_to,
"created_by" : req.body.created_by,
})
.then(res.json.bind(res))
.catch( res.json.bind(res));
});
*/
