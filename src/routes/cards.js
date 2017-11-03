const express = require('express');
const router = express.Router();
const models = require('../../models');
const Card = models.card;
const Priority = models.priority;
const Status = models.status;
const User = models.user;
const Sequelize = models.Sequelize;
/*
router.get('/', (req, res) => {
  return Card.findAll({
    include: [
    { model: User},
    { model: Status},
    { model: Priority}
    ]
  })
  .then ((cards) =>{
    res.json(cards);
  })
  .catch((err) => {
    throw new Error('Unable to get database!!!');
  })
})


router.post('/', (req, res) => {
  console.log('POST ROUTER - REQBODY:',req)
  return Card.create({
    title: req.body.title,
    priority_id: req.body.priority_id,
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to,
    status_id: 3
  })
  .then((card) => {
    return res.json(card);
  });
});

module.exports = router;
*/

router.get('/', (req, res) => {
  return Card.findAll({
    include: [
      {
        model: User/*,
        as: 'creator',
        attributes: ['id', 'name']*/
      }, /*{
        model: User,
        as: 'assignee',
        attributes: ['id', 'name']
      },*/ {
        model: Status
      }, {
        model: Priority
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

module.exports = router;

/*
router.get('/', (req, res) => {
  return Card.findAll({
    include: [
    {
      model: User,
      where: {id:Sequelize.col('card.created_by')},
      as: 'creator'
    },
    {
      model: User,
      where: {id:Sequelize.col('card.assigned_to')},
      as: 'assignee'
    },

    { model: Status},
    { model: Priority}
    ]
  })
  .then ((cards) =>{
    res.json(cards);
  })
  .catch((err) => {
    throw new Error(err);
  })
})

module.exports = router;
*/
