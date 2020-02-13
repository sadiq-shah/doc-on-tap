'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNo: {
      type: DataTypes.STRING
    },
    isDiabetic: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    isSmoker: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    isHypertension: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    isObese: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Patient.associate = function(models) {
    // associations can be defined here
  };
  return Patient;
};