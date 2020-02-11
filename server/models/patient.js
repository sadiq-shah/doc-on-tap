'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    phoneNo: DataTypes.STRING
  }, {});
  Patient.associate = function(models) {
    // associations can be defined here
  };
  return Patient;
};