'use strict';
module.exports = (sequelize, DataTypes) => {
  const DishType = sequelize.define('DishType', {
    dishId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {});
  DishType.associate = function(models) {
    // associations can be defined here
  };
  return DishType;
};
