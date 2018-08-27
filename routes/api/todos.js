const express = require('express');
const router = express.Router();

const Todo = require('../../models/Todo');

router.get('/', (req, res) => {
  Todo.find()
  .then(todos => res.json(todos))
});


router.post('/', (req, res) => {
  const newTodo = new Todo({
    name: req.body.name,
    priority: req.body.priority,
    date:req.body.date
  });
  newTodo.save()
   .then(todo => res.json(todo));
});


router.delete('/:id', (req, res) => {
  Todo.remove({_id: req.params.id})
   .then(() => { res.json({success: true})
   })
});

module.exports = router;
