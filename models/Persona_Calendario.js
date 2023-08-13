const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Persona_Calendario', {
    ID_Persona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Persona',
        key: 'ID_Persona'
      }
    },
    ID_Calendario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Calendario',
        key: 'ID_Calendario'
      }
    }
  }, {
    sequelize,
    tableName: 'Persona_Calendario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Persona" },
          { name: "ID_Calendario" },
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
