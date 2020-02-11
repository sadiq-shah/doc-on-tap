'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      phoneNo: {
        type: Sequelize.STRING
      },
      isDiabetic: {
        type: Sequelize.BOOLEAN
      },
      isSmoker: {
        type: Sequelize.BOOLEAN
      },
      hasHypertension: {
        type: Sequelize.BOOLEAN
      },
      isObese: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Patients');
  }
};