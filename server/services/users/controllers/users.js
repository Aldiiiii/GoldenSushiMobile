const User = require("../models/users")

class UserController {
    static async findAll(req, res, next){
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res, next){
        try {
            const { username, email, password, role, phoneNumber, address } = req.body
            const newUser = await User.create({
                username, email, password, role, phoneNumber, address
            })
            console.log(newUser)
            res.status(200).json(newUser)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async findOne(req, res, next){
        try {
            const {id} = req.params
            const findUser = await User.findOne(id)
            res.status(200).json(findUser)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = UserController