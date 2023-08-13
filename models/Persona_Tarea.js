const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Persona_Tarea', {
    ID_Persona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Persona',
        key: 'ID_Persona'
      }
    },
    ID_Tarea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Tarea',
        key: 'ID_Tarea'
      }
    }
  }, {
    sequelize,
    tableName: 'Persona_Tarea',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Persona" },
          { name: "ID_Tarea" },
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
