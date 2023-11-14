const { Item } = require('../models')

class ClientController {
    static async items(req, res, next){
        try {
            const data = await Item.findAll({
                order: [['id', 'ASC']]
            })
            if(!data){
                throw {name: "Data not found"}
            }
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async itemById(req, res, next){
        try {
            const {id} = req.params
            const data = await Item.findByPk(id)
            if(!data){
                throw {name: "Data not found"}
            }
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ClientController