const express = require('express')
const AdminController = require('../controllers/adminControllers')
const authentication = require('../middlewares/authentication')
const router = express.Router()

router.post('/register', AdminController.register)
router.post('/login', AdminController.login)

router.use(authentication)

router.get('/items', AdminController.items)
router.post('/items', AdminController.add)
router.put('/items', AdminController.edit)
router.delete('/items', AdminController.delete)
router.get('/items/:id', AdminController.itemById)
router.get('/categories', AdminController.categories)
router.post('/categories', AdminController.createCategories)
router.delete('/categories', AdminController.deleteCategories)


module.exports = router