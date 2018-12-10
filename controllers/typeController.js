const Types = require('../db/models').Types;
const User = require('../db/models').User;

module.exports = {
  addDishType(req,res) {
    return Types
      .create({
        dishType: req.body.dishType,
        image: req.body.image,

      },
        {
          include: {
            model: User
          }
        }
        ).then(type => {
        res.status(200).send({ message: 'Dish Type added successfully', type:type })
      }).catch(error => res.status(400).send(error))
  },
  getDishType(req,res) {
    return Types.findByPk(
        req.params.id, {
          include: {
            model: User
          }
        }
      ).then(type => {
        if(!type) {
          return res.status(404).send({ status: 'Dish type with that ID does not exist' })
        }
        return res.status(200).send(type)
    }).catch(error => res.status(400).send(error))
  }
};
