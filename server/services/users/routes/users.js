const express = require('express')
const router = express.Router()
const UserController = require("../controllers/users")

router.get('/', UserController.findAll)
router.post('/', UserController.create)
router.get('/:id', UserController.findOne)
router.delete('/:id', UserController.delete)

module.exports = router