'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Calendario', [
	     
      {
        ID_Calendario: 1,
        nombre: 'Calendario Familiar'
    },
    {
        ID_Calendario: 2,
        nombre: 'Calendario de Trabajo'
    },
    {
        ID_Calendario: 3,
        nombre: 'Calendario Personal'
    }
      ], {});
   
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Calendario', null, {});
     
  }
};
