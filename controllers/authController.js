const jwt = require('jsonwebtoken');
const config = require('../db/config/config');

VerifyToken = (req,res,next) => {
  const token = req.headers['x-access-api'];
  if (!token) return res.status(404).send({auth: false, message: 'No token provided.'});

  jwt.verify(token, config.secret, (error, decoded) => {
    if (error) return res.status(500).send({auth:false, message: 'Failed to authenticate token'});
    req.user=decoded.id
  })
};

module.exports = VerifyToken;
