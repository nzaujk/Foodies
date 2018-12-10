'use strict';
module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define('Types', {
    dishType: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Types.associate = function(models) {
    Types.belongsToMany(models.Dishes, {through: 'DishType', foreignKey: 'typeId'})
    Types.belongsTo(models.User, { onDelete: 'CASCADE'})
  };
  return Types;
};
