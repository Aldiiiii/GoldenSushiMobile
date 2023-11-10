const express = require('express')
const router = express.Router()
const adminRouter = require('./admin')
const clientRouter = require('./client')

router.use('/pub', clientRouter)
router.use('/', adminRouter)

module.exports = router