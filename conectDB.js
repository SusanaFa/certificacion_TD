import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let conectDB;

// Verificar configuración de variables de entorno
if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_HOST || !process.env.DB_DIALECT) {
  console.error('Por favor, configure correctamente las variables de entorno en el archivo .env');
} else {
  // Configuración de conexion a la BD
  conectDB = new Sequelize(process.env.DB_NAME,
     process.env.DB_USER,
     process.env.DB_PASSWORD, {
     host: process.env.DB_HOST,
     dialect: process.env.DB_DIALECT,
  });
  
  // conectando a DB
  conectDB
    .authenticate()
    .then(() => {
      console.log('Conexión establecida correctamente.');
    })
    .catch(error => {
      console.error('No se pudo conectar a la base de datos:', error);
    });
}

export default conectDB;

//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
