'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    name: DataTypes.STRING,
    instructions: DataTypes.STRING,
  }, {});
  Recipes.associate = function(models) {
    Recipes.belongsTo(models.Dishes, { onDelete: 'CASCADE' })
  };
  return Recipes;
};
