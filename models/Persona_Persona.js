const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Persona_Persona', {
    ID_Persona1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Persona',
        key: 'ID_Persona'
      }
    },
    ID_Persona2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Persona',
        key: 'ID_Persona'
      }
    }
  }, {
    sequelize,
    tableName: 'Persona_Persona',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Persona1" },
          { name: "ID_Persona2" },
        ]
      },
      {
        name: "ID_Persona2",
        using: "BTREE",
        fields: [
          { name: "ID_Persona2" },
        ]
      },
    ]
  });
};
