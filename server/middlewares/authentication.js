const { verify } = require('../helpers/jsonwebtoken')
const { User } = require('../models')

module.exports = async(req, res, next) => {
    try {
        const {access_token} = req.headers
        
        if(!access_token) throw{status: 401, message: 'You are not authenticated!'}

        const { id } = verify(access_token)

        const user = await User.findByPk(id)

        if(!user) throw{status: 401, message: 'You are not authenticated!'}

        req.user = {
            id: user.id,
            username: user.username,
            email: user.email
        }

        next()
    } 
    catch (error) {
        next(error)    
    }
}