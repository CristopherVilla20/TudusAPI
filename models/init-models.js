var DataTypes = require("sequelize").DataTypes;
var _Asignacion = require("./Asignacion");
var _Calendario = require("./Calendario");
var _Persona = require("./Persona");
var _Persona_Calendario = require("./Persona_Calendario");
var _Persona_Persona = require("./Persona_Persona");
var _Persona_Persona_Tarea = require("./Persona_Persona_Tarea");
var _Persona_Tarea = require("./Persona_Tarea");
var _Tarea = require("./Tarea");

function initModels(sequelize) {
  var Asignacion = _Asignacion(sequelize, DataTypes);
  var Calendario = _Calendario(sequelize, DataTypes);
  var Persona = _Persona(sequelize, DataTypes);
  var Persona_Calendario = _Persona_Calendario(sequelize, DataTypes);
  var Persona_Persona = _Persona_Persona(sequelize, DataTypes);
  var Persona_Persona_Tarea = _Persona_Persona_Tarea(sequelize, DataTypes);
  var Persona_Tarea = _Persona_Tarea(sequelize, DataTypes);
  var Tarea = _Tarea(sequelize, DataTypes);

  Calendario.belongsToMany(Persona, { as: 'ID_Persona_Personas', through: Persona_Calendario, foreignKey: "ID_Calendario", otherKey: "ID_Persona" });
  Persona.belongsToMany(Calendario, { as: 'ID_Calendario_Calendarios', through: Persona_Calendario, foreignKey: "ID_Persona", otherKey: "ID_Calendario" });
  Persona.belongsToMany(Persona, { as: 'ID_Persona2_Personas', through: Persona_Persona, foreignKey: "ID_Persona1", otherKey: "ID_Persona2" });
  Persona.belongsToMany(Persona, { as: 'ID_Persona1_Personas', through: Persona_Persona, foreignKey: "ID_Persona2", otherKey: "ID_Persona1" });
  Persona.belongsToMany(Tarea, { as: 'ID_Tarea_Tareas', through: Persona_Tarea, foreignKey: "ID_Persona", otherKey: "ID_Tarea" });
  Tarea.belongsToMany(Persona, { as: 'ID_Persona_Persona_Persona_Tareas', through: Persona_Tarea, foreignKey: "ID_Tarea", otherKey: "ID_Persona" });
  Persona_Calendario.belongsTo(Calendario, { as: "ID_Calendario_Calendario", foreignKey: "ID_Calendario"});
  Calendario.hasMany(Persona_Calendario, { as: "Persona_Calendarios", foreignKey: "ID_Calendario"});
  Tarea.belongsTo(Calendario, { as: "ID_Calendario_Calendario", foreignKey: "ID_Calendario"});
  Calendario.hasMany(Tarea, { as: "Tareas", foreignKey: "ID_Calendario"});
  Asignacion.belongsTo(Persona, { as: "ID_Persona_Persona", foreignKey: "ID_Persona"});
  Persona.hasMany(Asignacion, { as: "Asignacions", foreignKey: "ID_Persona"});
  Persona_Calendario.belongsTo(Persona, { as: "ID_Persona_Persona", foreignKey: "ID_Persona"});
  Persona.hasMany(Persona_Calendario, { as: "Persona_Calendarios", foreignKey: "ID_Persona"});
  Persona_Persona.belongsTo(Persona, { as: "ID_Persona1_Persona", foreignKey: "ID_Persona1"});
  Persona.hasMany(Persona_Persona, { as: "Persona_Personas", foreignKey: "ID_Persona1"});
  Persona_Persona.belongsTo(Persona, { as: "ID_Persona2_Persona", foreignKey: "ID_Persona2"});
  Persona.hasMany(Persona_Persona, { as: "ID_Persona2_Persona_Personas", foreignKey: "ID_Persona2"});
  Persona_Persona_Tarea.belongsTo(Persona, { as: "ID_Persona1_Persona", foreignKey: "ID_Persona1"});
  Persona.hasMany(Persona_Persona_Tarea, { as: "Persona_Persona_Tareas", foreignKey: "ID_Persona1"});
  Persona_Persona_Tarea.belongsTo(Persona, { as: "ID_Persona2_Persona", foreignKey: "ID_Persona2"});
  Persona.hasMany(Persona_Persona_Tarea, { as: "ID_Persona2_Persona_Persona_Tareas", foreignKey: "ID_Persona2"});
  Persona_Tarea.belongsTo(Persona, { as: "ID_Persona_Persona", foreignKey: "ID_Persona"});
  Persona.hasMany(Persona_Tarea, { as: "Persona_Tareas", foreignKey: "ID_Persona"});
  Asignacion.belongsTo(Tarea, { as: "ID_Tarea_Tarea", foreignKey: "ID_Tarea"});
  Tarea.hasMany(Asignacion, { as: "Asignacions", foreignKey: "ID_Tarea"});
  Persona_Persona_Tarea.belongsTo(Tarea, { as: "ID_Tarea_Tarea", foreignKey: "ID_Tarea"});
  Tarea.hasMany(Persona_Persona_Tarea, { as: "Persona_Persona_Tareas", foreignKey: "ID_Tarea"});
  Persona_Tarea.belongsTo(Tarea, { as: "ID_Tarea_Tarea", foreignKey: "ID_Tarea"});
  Tarea.hasMany(Persona_Tarea, { as: "Persona_Tareas", foreignKey: "ID_Tarea"});

  return {
    Asignacion,
    Calendario,
    Persona,
    Persona_Calendario,
    Persona_Persona,
    Persona_Persona_Tarea,
    Persona_Tarea,
    Tarea,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
