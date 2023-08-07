const bcryptjs = require('bcryptjs')

const hash = (password) => {
    return bcryptjs.hashSync(password, 5)
}

const compare = (password, hash) => {
    return bcryptjs.compareSync(password, hash)
}

module.exports = { hash, compare }