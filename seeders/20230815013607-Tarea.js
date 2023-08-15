'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tarea', [
	    {
        ID_Tarea: 1,
        nombre: 'Lavar los platos',
        descripcion: 'Lavar los platos después de la cena',
        fecha_limite: '2022-12-01',
        ID_calendario: 1
    },
    {
       ID_Tarea:2,
        nombre: 'Limpiar la casa',
        descripcion: 'Limpiar la casa el fin de semana',
        fecha_limite: '2022-12-02',
        ID_calendario: 1
    },
    {
        ID_Tarea: 3,
        nombre: 'Hacer la compra',
        descripcion: 'Hacer la compra para la semana',
        fecha_limite: '2022-12-03',
        ID_calendario: 1
    },
    {
        ID_Tarea: 4,
        nombre: 'Cocinar',
        descripcion: 'Cocinar la cena',
        fecha_limite: '2022-12-04',
        ID_calendario: 1
    },
    {
        ID_Tarea: 5,
        nombre: 'Lavar la ropa',
        descripcion: 'Lavar la ropa el sábado',
        fecha_limite: '2022-12-05',
        ID_calendario: 1
    },
    {
        ID_Tarea: 6,
        nombre: 'Pasear al perro',
        descripcion: 'Pasear al perro por la mañana',
        fecha_limite: '2022-12-06',
        ID_calendario: 1
    },
    {
        ID_Tarea: 7,
        nombre: 'Regar las plantas',
        descripcion: 'Regar las plantas cada dos días',
        fecha_limite: '2022-12-07',
        ID_calendario: 1
    },
    {
        ID_Tarea: 8,
        nombre: 'Sacar la basura',
        descripcion: 'Sacar la basura por la noche',
        fecha_limite: '2022-12-08',
        ID_calendario: 1
    },
    {
        ID_Tarea: 9,
        nombre: 'Hacer la cama',
        descripcion: 'Hacer la cama por la mañana',
        fecha_limite: '2022-12-09',
        ID_calendario: 1
    },
    {
        ID_Tarea: 10,
        nombre: 'Planchar la ropa',
        descripcion: 'Planchar la ropa el domingo',
        fecha_limite: '2022-12-10',
        ID_calendario: 1
    }  
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
   
    await queryInterface.bulkDelete('Tarea', null, {});
    
  }
};
