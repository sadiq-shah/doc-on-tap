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
      
      Doctor.belongsTo(models.User, {
        foriegnKey: 'userId',
        as: 'user',
        // onDelete: 'CASCADE'
      });

      Doctor.hasMany(models.Appointment, {
        foriegnKey: 'doctorId',
        as: 'appointments'
      });

      Doctor.hasMany(models.Review, {
        foriegnKey: 'doctorId',
        as: 'reviews'
      });

      Doctor.hasMany(models.DoctorSchedule, {
        foriegnKey: 'doctorId',
        as: 'doctorSchedules'
      });

  };
  return Doctor;
};