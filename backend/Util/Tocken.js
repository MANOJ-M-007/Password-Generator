const jwt = require('jsonwebtoken')

const gerenateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
module.exports = gerenateToken