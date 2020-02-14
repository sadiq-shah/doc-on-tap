'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assessment = sequelize.define('Assessment', {
    
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      defaultValue: Date.now()
    },
    disease1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    disease1Prob: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    disease2Name: {
      type: DataTypes.STRING
    },
    disease2Prob: {
      type: DataTypes.FLOAT
    },
    disease3Name: {
      type: DataTypes.STRING
    },
    disease3Prob: {
      type: DataTypes.FLOAT
    }

  }, {});
  Assessment.associate = function(models) {
    
    Assessment.belongsTo(models.Patient, {
      foreignKey: 'patientId',
      onDelete: 'CASCADE',
    });

    Assessment.hasMany(models.Symptom, {
      foreignKey: 'assessmentId',
      as: 'symptoms',
    });

  };
  return Assessment;
};