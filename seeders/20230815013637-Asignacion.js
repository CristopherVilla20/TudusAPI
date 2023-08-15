'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Asignacion', [
      {
        ID_Asignacion: 1,
        fecha_asignacion: '2022-11-01',
        ID_persona: 1,
        ID_tarea: 1
    },
    {
        ID_Asignacion: 2,
        fecha_asignacion: '2022-11-02',
        ID_persona: 2,
        ID_tarea: 2
    },
    {
        ID_Asignacion: 3,
        fecha_asignacion: '2022-11-03',
        ID_persona: 3,
        ID_tarea: 3
    },
    {
        ID_Asignacion: 4,
        fecha_asignacion: '2022-11-04',
        ID_persona: 4,
        ID_tarea: 4
    },
    {
        ID_Asignacion: 5,
        fecha_asignacion: '2022-11-05',
        ID_persona: 5,
        ID_tarea: 5
    },
    {
        ID_Asignacion: 6,
        fecha_asignacion: '2022-11-06',
        ID_persona: 6,
        ID_tarea: 6
    },
    {
        ID_Asignacion: 7,
        fecha_asignacion: '2022-11-07',
        ID_persona: 7,
        ID_tarea: 7
    },
    {
        ID_Asignacion: 8,
        fecha_asignacion: '2022-11-08',
        ID_persona: 8,
        ID_tarea: 8
    },
    {
        ID_Asignacion: 9,
        fecha_asignacion: '2022-11-09',
        ID_persona: 9,
        ID_tarea: 9
    },
    {
        ID_Asignacion: 10,
        fecha_asignacion: '2022-11-10',
        ID_persona: 10,
        ID_tarea: 10
    }
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Asignacion', null, {});
   
  }
};
