const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    //
  } else {
    res.status(401).json('we wantz token')
  }
};
