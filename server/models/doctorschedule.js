'use strict';
module.exports = (sequelize, DataTypes) => {
  const DoctorSchedule = sequelize.define('DoctorSchedule', {
    doctorId: {
      type: DataTypes.INTEGER
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
    
    Doctor.belongsTo(models.Doctor, {
      foreignKey: 'doctorId',
      onDelete: 'CASCADE',
    });

  };
  return DoctorSchedule;
};