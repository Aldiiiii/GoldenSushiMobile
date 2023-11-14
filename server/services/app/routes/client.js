const express = require('express')
const ClientController = require('../controllers/clientControllers')
const router = express.Router()

router.get('/items', ClientController.items)
router.get('/items/:id', ClientController.itemById)

module.exports = router