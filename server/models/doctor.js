'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hospital:{
      type: DataTypes.STRING,
      allowNull: false
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specialization: {
     type: DataTypes.STRING,
     allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  }, {});
  Doctor.associate = function(models) {
    // associations can be defined here
  };
  return Doctor;
};