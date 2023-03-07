const express = require('express')
const router = express.Router()
const controller = require('../controllers/payment_method')

router.post('/', controller.create)
router.get('/', controller.retrieve)

module.exports = router

module.exports = router
