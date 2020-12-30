const express = require('express')
const router = express.Router()
const todoRoute = require('./todoRoute')
const UserController = require('../controllers/userController')


router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use('/todos', todoRoute)

module.exports = router