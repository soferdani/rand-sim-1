const express = require('express')
const router = express.Router()

// console.log("dani is the king of the sea")


const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = { id: id++, text: text, complete: false }

    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    let isDone = todos.find(t => t.id == todoID).complete
    todos.find(t => t.id == todoID).complete = !isDone
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    const item = todos.find(t=> t.id == todoID)
    const index = todos.indexOf(item)
    // console.log("this is index " + index);
    // console.log("this is todoID " + todoID);
    todos.splice(index, 1)
    res.send(todos)
})

module.exports = router