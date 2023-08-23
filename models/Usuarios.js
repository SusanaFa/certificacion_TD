import { DataTypes } from 'sequelize';
import conectDB from '../conectDB.js';
import bcrypt from 'bcrypt';

const Usuario = conectDB.define('usuario', {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  nombreUsuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [1, 45],
    },
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [12, 20], 
         },
  },
}, {
  freezeTableName: true, 
  timestamps: false,
});


//hasheo de la contraseña
Usuario.addHook('beforeCreate', async (usuario) => {
  const hashedContraseña = await bcrypt.hash(usuario.contrasena, 10);
  usuario.contrasena = hashedContraseña;
});
export default Usuario;



//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
