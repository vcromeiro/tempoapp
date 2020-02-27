'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
          args: true,
          msg: 'Username already in use!'
      }
    },
    cityName: DataTypes.STRING,
    state: DataTypes.STRING,
  }, {});
  return User;
};