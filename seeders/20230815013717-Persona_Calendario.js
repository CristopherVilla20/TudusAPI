'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Persona_Calendario', [
      {
        ID_persona: 1,
        ID_calendario: 1
    },
    {
        ID_persona: 2,
        ID_calendario: 1
    },
    {
        ID_persona: 3,
        ID_calendario: 1
    },
    {
        ID_persona: 4,
        ID_calendario: 1
    },
    {
        ID_persona: 5,
        ID_calendario: 1
    },
    {
        ID_persona: 6,
        ID_calendario: 2
    },
    {
        ID_persona: 7,
        ID_calendario: 2
    },
    {
        ID_persona: 8,
        ID_calendario: 2
    },
    {
        ID_persona: 9,
        ID_calendario: 3
    },
    {
        ID_persona: 10,
        ID_calendario: 3
    }
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Persona_Calendario', null, {});
    
  }
};
