const { Todo } = require('../models')
const todo = require('../models/todo')

class TodoController {
    static async findAll( req, res, next ) {
        try {
            const todos = await Todo.findAll({
                where: {
                    UserId: req.loggedIn.id
                }
            })
            res.status(200).json(todos)
        }
        catch(err) {
            next(err)
        }
    }
    static async addTodo(req, res, next) {
        try {
            const {title, description, due_date} = req.body
            const newTodo = await Todo.create({title, description, due_date, status: 'unfinish', UserId:req.loggedIn.id})
            console.log(newTodo)
            res.status(201).json(newTodo)
        }
        catch(err) {
            next(err)
        }
    }
    static async getTodo(req, res, next) {
        try {
            const id = req.params.id
            const todo = await Todo.findOne({
                where: {
                    id: id
                }
            })
            if(!todo) {
                res.status(404).json({message: 'Todo not found'})
            }
            else {
                res.status(200).json(todo)
            }
        }
        catch(err) {
            next(err)
        }
    }
    static async changeTodo(req, res, next) {
        try {
            const id = req.params.id
            const {title, description, due_date, status} = req.body
            const todo = await Todo.findByPk(id)
            if(!todo) {
                res.status(404).json({message: 'Todo not found'})
            }
            const newestTodo = await Todo.update({ title, description, due_date, status},
                {
                    where: {id},
                    returning: true
                })
                res.status(200).json(newestTodo[1][0])
        }
        catch(err) {
            next(err)
        }
    }
    static async editStatus(req, res, next) {
        try {   
            const id = req.params.id
            const { status } = req.body
            const todo = await Todo.findByPk(id)

            if(!todo) {
                throw {
                    message: 'Todo not found'
                }
            }
            const editedTodo = await Todo.update({
                status
            },
            {
                where: {
                    id
                },
                returning: true
            })
            res.status(200).json(editedTodo[1][0])
        }
        catch(err) {
            next(err)
        }
    }
    static async destroyTodo(req, res, next) {
        try {
            const id = req.params.id
            const todos = await Todo.findByPk(id)
            if(!todos) {
                throw {
                    message: 'Todo not found'
                }
            }
            const todo = await Todo.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({message: 'deleted Todo success'})
        }
        catch(err) {
            next(err)
        }
    }
}

module.exports = TodoController