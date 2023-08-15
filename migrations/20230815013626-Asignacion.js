'use strict';
const Asignacion = require('../models').Asignacion;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Asignacion.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Asignacion');
  }
};
