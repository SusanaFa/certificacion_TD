import { DataTypes } from 'sequelize';
import conectDB from '../conectDB.js';
import Equipo from './Equipo.js'; 


const Jugadores = conectDB.define('jugadores', {

  idJugador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  DNI: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [9,10] 
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 45] 
    }
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 45] 
    }
  },
  nacionalidad: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 45] 
    }
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  camiseta: {
    type: DataTypes.INTEGER,
  },
    idEquipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Equipo, 
      key: 'idEquipo',
    }
  },
},{
    freezeTableName: true, 
    timestamps: false,
  });

export default Jugadores;



//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
