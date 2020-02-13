'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5,1024]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5,1024]
      }
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    
    User.hasOne(models.Patient, {
      foreignKey: "userId",
      as: "Patient"
    });

    User.hasOne(models.Doctor, {
      foreignKey: "userId",
      as: "Doctor"
    });

  };
  return User;
};