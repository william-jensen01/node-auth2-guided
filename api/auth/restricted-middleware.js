const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config/secrets.js')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, jwtSecret, () => {})
  } else {
    res.status(401).json('we wantz token')
  }
};
