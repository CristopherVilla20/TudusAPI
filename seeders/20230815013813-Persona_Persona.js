'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Persona_Persona', [
      {
        ID_persona1: 1,
        ID_persona2: 2
    },
    {
        ID_persona1: 2,
        ID_persona2: 3
    },
    {
        ID_persona1: 3,
        ID_persona2: 4
    },
    {
        ID_persona1: 4,
        ID_persona2: 5
    },
    {
        ID_persona1: 5,
        ID_persona2: 1
    },
    {
        ID_persona1: 6,
        ID_persona2: 7
    },
    {
        ID_persona1: 7,
        ID_persona2: 8
    },
    {
        ID_persona1: 8,
        ID_persona2: 6
    },
    {
        ID_persona1: 9,
        ID_persona2: 10
    },
    {
        ID_persona1: 10,
        ID_persona2: 9
    }
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Persona_Persona', null, {});
    
  }
};
