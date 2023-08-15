'use strict';
const Tarea = require('../models').Tarea;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Tarea.sync();
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('Tarea');
  }
};
