const { addToDo, listTodos } = require('../Controller/TodoControllers')

const router = require('express').Router()

router.post('/addtodo',addToDo)
router.get('/listtodos',listTodos)

module.exports = router