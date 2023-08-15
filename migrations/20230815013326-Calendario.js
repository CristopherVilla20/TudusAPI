'use strict';
const Calendario = require('../models').Calendario;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Calendario.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Calendario');
     
  }
  
};
