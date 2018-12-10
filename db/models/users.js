'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Dishes, { onDelete: 'CASCADE' });
    User.hasMany(models.Types, { onDelete: 'CASCADE' });
  };
  return User;
};
