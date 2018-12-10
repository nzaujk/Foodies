const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../db/config/config');
const User = require('../db/models').User;
const Dishes = require('../db/models').Dishes;

module.exports = {
  addUser(req, res) {
    const { password } = req.body;
    return User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(password, 8),
      }).then(user => {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            name: `${user.firstName}  ${user.lastName}`
          },
          "secret",
          { expiresIn: 86400 }
        );
        res.status(200).send({ status: "registration successful", token })
      }).catch(error => res.status(400).send(error))
  },
  getUser(req,res) {
    const { email, password } = req.body;
    return User.findOne({where: { email: email }

    }).then(user => {
      bcrypt.compare(password, user.password, (err, verified) => {
        if (verified) {
          const token = jwt.sign(
            {
              id: user.id,
              email: user.email,
              name: `${user.firstName} ${user.lastName}`
            },
            config.secret,
            { expiresIn: 86400 }
          );
          res.status(200).send({ status: "login successful", token, });
        } else {
          res.status(403).send({ Error: "Invalid username or password" });
        }
      });
    }).catch(error => { res.status(500).send(error)});
  },
  logOutUser(req,res) {
    res.status(200).send({auth: false, token: null})
  }
};

