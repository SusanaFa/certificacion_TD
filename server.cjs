import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import conectDB from './conectDB.js'; 
import app from './app.js';
//import path from 'path';
import  {pobladoDatabase} from './seed.js';  //Importando el poblado de las tablas
import Jugadores from './models/Jugadores.js'; // Importando los modelos
import Equipo from './models/Equipo.js';
import Emplazamiento from './models/Emplazamiento.js';
import Campeonato from './models/Campeonato.js';
import Usuario from './models/Usuarios.js';
import Partidos from './models/Partidos.js';

console.clear();

dotenv.config();
const server = express();
const PORT = process.env.PORT || 3000; 

// Middleware
server.use(bodyParser.json());



// Sincronizacion de los modelos con la base de datos
conectDB.sync({force: true})
  .then(async() => {
    //creación de las tablas en la base de datos
    console.log('Tablas creadas en la base de datos');
    //poblacion de las tablas en la base de datos
    await pobladoDatabase();

    server.use(app);
    server.listen(PORT, () => {
      console.log(`Servidor arriba en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar tablas:', error);
  });

// Manejo de errores
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor.' });
});


//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
