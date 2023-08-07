const jwt = require('jsonwebtoken')
const iceCream = 'MasHardhim'

const sign = (payload) => {
    return jwt.sign(payload, iceCream)
}

const verify = (token) => {
    return jwt.verify(token, iceCream)
}

module.exports = { sign, verify }