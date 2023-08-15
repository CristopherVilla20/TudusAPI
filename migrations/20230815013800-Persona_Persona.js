'use strict';
const Persona_Persona = require('../models').Persona_Persona;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Persona_Persona.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Persona_Persona');
  }
};
