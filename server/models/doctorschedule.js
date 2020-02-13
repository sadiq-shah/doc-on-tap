'use strict';
module.exports = (sequelize, DataTypes) => {
  const DoctorSchedule = sequelize.define('DoctorSchedule', {
    doctorId: {
      type: DataTypes.NUMBER
    },
    day: {
      type: DataTypes.STRING
    },
    from: {
      type: DataTypes.DATE
    },
    to: {
      type: DataTypes.DATE
    }
  }, {});
  DoctorSchedule.associate = function(models) {
    // associations can be defined here
  };
  return DoctorSchedule;
};