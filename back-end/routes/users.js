const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')
router.post('/login', controller.login)

router.post('/', controller.create)
router.get()
router.get()
router.post()

module.exports = router
