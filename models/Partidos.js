import Sequelize from 'sequelize';
import conectDB from '../conectDB.js';
import Equipo from './Equipo.js';
import Campeonato from './Campeonato.js';

const Partido = conectDB.define('partido', {
  idPartido: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  golesEquipo1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  golesEquipo2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  estado: {
    type: Sequelize.ENUM('ACTIVO', 'INACTIVO'),
    allowNull: false,
    defaultValue: 'ACTIVO',
  },
  // Claves foráneas con equipo
  idEquipo1: {
    type: Sequelize.INTEGER,
    references: {
      model: Equipo,
      key: 'idEquipo',
    },
  },
  idEquipo2: {
    type: Sequelize.INTEGER,
    references: {
      model: Equipo,
      key: 'idEquipo',
    },
  },
  //Clave foránea con Campeonato
  idCampeonato: {
    type: Sequelize.INTEGER,
    references: {
      model: Campeonato,
      key: 'idCampeonato',
    },
  },
},
{
    freezeTableName: true,
    timestamps: false,
   });
  
// Relaciones entre las distintas tablas 
Partido.belongsTo(Equipo, { foreignKey: 'idEquipo1', as: 'equipo1' });
Partido.belongsTo(Equipo, { foreignKey: 'idEquipo2', as: 'equipo2' });
Partido.belongsTo(Campeonato, { foreignKey: 'idCampeonato', as: 'campeonato' });

export default Partido;

//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
