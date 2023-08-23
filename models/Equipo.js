import { DataTypes } from 'sequelize';
import conectDB from '../conectDB.js';
import Emplazamiento from './Emplazamiento.js';
import Campeonato from './Campeonato.js'; 



const Equipo = conectDB.define('equipo', {
  idEquipo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 45] 
    }
  },
  idEmplazamiento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Emplazamiento,
      key: 'idEmplazamiento', 
    }
  },
  idCampeonato: {
    type: DataTypes.INTEGER,
    references: {
      model: Campeonato, 
      key: 'idCampeonato',
    }
  },
},
{
  freezeTableName: true,
  timestamps: false,
});

export default Equipo;




//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
