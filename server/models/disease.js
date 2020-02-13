'use strict';
module.exports = (sequelize, DataTypes) => {
  const Disease = sequelize.define('Disease', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Disease.associate = function(models) {
    // associations can be defined here
  };
  return Disease;
};