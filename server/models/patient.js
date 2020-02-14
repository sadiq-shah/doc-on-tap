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
    
    Patient.belongsTo(models.User, {
      foriegnKey: 'userId',
      as: 'user',
      // onDelete: 'CASCADE'
    });

    Patient.hasMany(models.Appointment, {
      foriegnKey: 'patientId',
      as: 'appointments'
    });

    Patient.hasMany(models.Review, {
      foriegnKey: 'patientId',
      as: 'reviews'
    });

    Patient.hasMany(models.Assessment, {
      foreignKey: 'assessmentId',
      as: 'assessments',
    });

  };
  return Patient;
};

