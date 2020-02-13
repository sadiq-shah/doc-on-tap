'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending'
    },
    assessmentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Appointment.associate = function(models) {
  
    Appointment.belongsTo(models.Patient, {
      foreignKey: 'patientId',
      onDelete: 'CASCADE',
    });

    Appointment.belongsTo(models.Doctor, {
      foreignKey: 'doctorId',
      onDelete: 'CASCADE',
    });
  
  };
  return Appointment;
};