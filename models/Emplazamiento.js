import { DataTypes } from 'sequelize';
import conectDB from '../conectDB.js';

const Emplazamiento = conectDB.define('emplazamiento', {
  
  idEmplazamiento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
  timestamps: false,
 });

export default Emplazamiento;





//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
