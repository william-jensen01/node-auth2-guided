const jwt = require('jsonwebtoken')
const {} = require('../../')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify()
  } else {
    res.status(401).json('we wantz token')
  }
};
