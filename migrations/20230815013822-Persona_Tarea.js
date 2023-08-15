'use strict';
const Persona_Tarea = require('../models').Persona_Tarea;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Persona_Tarea.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Persona_Tarea');
  }
};
