import { DataTypes } from 'sequelize';
import  conectDB  from '../conectDB.js';

const Campeonato = conectDB.define('campeonato', {
  idCampeonato: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len:[1,45]
    }
  },
  descripcion: {
    type: DataTypes.STRING,
    validate: {
      len:[0, 255]
    }
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('Activo', 'Cerrado'), // Puedes ajustar los valores según tus necesidades
    allowNull: false,
    defaultValue: 'Activo',
  },
},
{
    freezeTableName: true,
    timestamps: false,
});

export default Campeonato;








//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
