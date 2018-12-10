'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    title: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Dishes.associate = function(models) {
    Dishes.belongsTo(models.User, { onDelete: 'CASCADE' });
    Dishes.belongsToMany(models.Types, { through: 'DishType', foreignKey: 'dishId' });
    Dishes.hasMany(models.Recipes, { onDelete: 'CASCADE' });
  };
  return Dishes;
};
