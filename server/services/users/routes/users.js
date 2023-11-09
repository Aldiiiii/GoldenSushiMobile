const express = require('express')
const router = express.Router()
const UserController = require("../controllers/users")

router.get('/', UserController.findAll)
router.post('/', UserController.create)
router.get('/:id', UserController.findOne)

module.exports = router