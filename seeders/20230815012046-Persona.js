'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Persona', [
	     
      {
        ID_Persona: 1,
        nombre:"Juan",
        edad: 30,
      },
      {
        ID_Persona: 2,
        nombre: 'Maria',
        edad: 28
    },
    {
        ID_Persona: 3,
        nombre: 'Carlos',
        edad: 35
    },
    {
        ID_Persona: 4,
        nombre: 'Ana',
        edad: 32
    },
    {
        ID_Persona: 5,
        nombre: 'Pedro',
        edad: 40
    },
    {
        ID_Persona: 6,
        nombre: 'Sofia',
        edad: 38
    },
    {
        ID_Persona: 7,
        nombre: 'Luis',
        edad: 45
    },
    {
        ID_Persona: 8,
        nombre: 'Laura',
        edad: 42
    },
    {
        ID_Persona: 9,
        nombre: 'Jose',
        edad: 50
    },
    {
        ID_Persona: 10,
        nombre: 'Carmen',
        edad: 48
    }

      ], {});
   
     
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Persona', null, {});
     
  }
};
