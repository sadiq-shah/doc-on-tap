'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Assessments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
          allowNull: false,
          references: {
            model: "Patients",
            key: "id",
          }
      },
      time: {
        type: Sequelize.DATE
      },
      disease1: {
        type: Sequelize.STRING
      },
      disease1Prob: {
        type: Sequelize.FLOAT
      },
      disease2Name: {
        type: Sequelize.STRING
      },
      disease2Prob: {
        type: Sequelize.FLOAT
      },
      disease3Name: {
        type: Sequelize.STRING
      },
      disease3Prob: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Assessments');
  }
};