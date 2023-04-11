const express = require('express')
const router = express.Router()
const controller = require('../controllers/order_rel_status')

router.post('/', controller.create)
router.get('/', controller.retrieve)

module.exports = router

module.exports = router
