'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    patientId: {
      type: DataTypes.INTEGER
    },
    doctorId: {
      type: DataTypes.INTEGER
    },
    time: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};