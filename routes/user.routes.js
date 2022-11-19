const Router = require('express')
const userControllers = require('../controllers/user.controllers')
const router = new Router()

router.post('/users', userControllers.craateUser)
router.get('/users', userControllers.getUsers)
router.get('/users/:id', userControllers.getUser)
router.put('/users', userControllers.updateUser)

module.exports = router