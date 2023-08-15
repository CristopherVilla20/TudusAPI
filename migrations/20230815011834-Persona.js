'use strict';
const Persona = require('../models').Persona;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await Persona.sync()
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Persona');
     
  }
};
