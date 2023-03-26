const express = require('express')
const router = express.Router()
const controller = require('../controllers/customer')

router.post('/', controller.create)
router.get('/', controller.retrieve)

module.exports = router

module.exports = router
