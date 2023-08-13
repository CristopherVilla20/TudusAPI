const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Asignacion', {
    ID_Asignacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Fecha_Asignacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ID_Persona: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Persona',
        key: 'ID_Persona'
      }
    },
    ID_Tarea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tarea',
        key: 'ID_Tarea'
      }
    }
  }, {
    sequelize,
    tableName: 'Asignacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Asignacion" },
        ]
      },
      {
        name: "ID_Persona",
        using: "BTREE",
        fields: [
          { name: "ID_Persona" },
        ]
      },
      {
        name: "ID_Tarea",
        using: "BTREE",
        fields: [
          { name: "ID_Tarea" },
        ]
      },
    ]
  });
};
