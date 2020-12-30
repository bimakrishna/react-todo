const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

async function authentication ( req, res, next ) {
    console.log('auth')
    const { access_token } = req.headers
    try {
        if(!access_token) {
            res.status(400).json({
                message: 'Please login first'
            })
        }
        else {
            const decoded = verifyToken(access_token)
            const user = await User.findOne({
                where: {
                    email: decoded.email,
                    id: decoded.id
                }
            })
            if(!user){
                throw {error: 'Please login first', status: 401}
            }
            else {
                req.loggedIn = decoded
                console.log(decoded)
                next()
            }
        } 
    }
    catch(err) {
        next(err)
    }
}

module.exports = authentication