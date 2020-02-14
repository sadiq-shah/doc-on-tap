'use strict';
module.exports = (sequelize, DataTypes) => {
  const Symptom = sequelize.define('Symptom', {
    assessmentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Symptom.associate = function(models) {
    
    Symptom.belongsTo(models.Assessment, {
      foreignKey: 'assesmentId',
      onDelete: 'CASCADE',
    });

  };
  return Symptom;
};