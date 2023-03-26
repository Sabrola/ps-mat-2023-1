<<<<<<< HEAD
const express = require('express')
const router = express.Router()
=======
const express = require('express');
const router = express.Router();
>>>>>>> c331981c84dd89cf802584b4f8cb394db1ab5fae
const controller = require('../controllers/customer_tag')

router.post('/', controller.create)
router.get('/', controller.retrieve)
<<<<<<< HEAD

module.exports = router

module.exports = router
=======
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router;
>>>>>>> c331981c84dd89cf802584b4f8cb394db1ab5fae
