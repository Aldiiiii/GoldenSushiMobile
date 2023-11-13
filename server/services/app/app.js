if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    }

const express = require('express')
const app = express()
const port = process.env.PORT || 4002
const cors = require('cors')
const router = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/', router)

app.use((err, req, res, next) => {
    let code = 500
    let message = "Internal server error"

    if(err.name === "SequelizeValidationError"){
        code = 400
        message = err.errors[0].message
    }else if(err.name === "Email/password is required" || err.name === "Email/password is invalid"){
        code = 400
        message = err.name
    } else if( err.name === "Invalid token"){
        code = 401
        message = err.name
    } else if( err.name === "Data not found"){
        code = 404
        message = err.name
    }
    res.status(code).json({message})
})

app.listen(port, () => {
    console.log(`I Love You ${port}`)
})