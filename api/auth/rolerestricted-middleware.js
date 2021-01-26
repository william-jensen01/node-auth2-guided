module.exports = role => (req, res, next) => {
  if (req.decodedJwt.role === role) {
    next()
  } else {
    res.status(403)
  }
}
