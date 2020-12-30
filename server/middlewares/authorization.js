const { Todo } = require('../models')

async function authorization ( req, res, next ) {
    const { id } = req.params
    try {
        const todos = await Todo.findByPk(id)
        if(!todos) {
            throw {
                message: 'Todo not found', status: 404
            }
        }
        else if (todos.UserId === req.loggedIn.id) {
            next()
        }
        else {
            throw {
                message: 'Not Authorized', status: 401
            }
        }
    }
    catch(err) {
        next(err)
    }
}

module.exports = authorization