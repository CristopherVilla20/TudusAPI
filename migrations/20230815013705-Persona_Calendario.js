'use strict';
const Persona_Calendario = require('../models').Persona_Calendario;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Persona_Calendario.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Persona_Calendario');
     
  
  }
};
