const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tarea', {
    ID_Tarea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Fecha_Limite: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ID_Calendario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Calendario',
        key: 'ID_Calendario'
      }
    }
  }, {
    sequelize,
    tableName: 'Tarea',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Tarea" },
        ]
      },
      {
        name: "ID_Calendario",
        using: "BTREE",
        fields: [
          { name: "ID_Calendario" },
        ]
      },
    ]
  });
};
