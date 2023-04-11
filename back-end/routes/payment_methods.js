const express = require('express')
const router = express.Router()
const controller = require('../controllers/payment_method')

router.post('/', controller.create)
router.get('/', controller.retrieve)
<<<<<<< HEAD

module.exports = router
=======
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)
>>>>>>> c331981c84dd89cf802584b4f8cb394db1ab5fae

module.exports = router
