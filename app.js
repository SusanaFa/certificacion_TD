import express from 'express';
import * as equipoController from './controllers/Equipo.js';
//import * as emplazamientoController from './controllers/Emplazamiento.js';
import * as jugadoresController from './controllers/Jugadores.js';
//import * as usuarioController from './controllers/usuario.js';
import * as campeonatoController from './controllers/Campeonato.js';
import * as partidoController from './controllers/Partidos.js';  // Importa el controlador de partidos


const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Asegúrate de que la ruta al archivo index.html sea correcta
});


// Rutas de equipos
app.get('/equipos', equipoController.getAllEquipos);
app.post('/equipos', equipoController.createEquipo);
app.put('/equipos/:id', equipoController.updateEquipo);
app.delete('/equipos/:id', equipoController.deleteEquipo);


// Rutas de jugadores
app.get('/jugadores', jugadoresController.getAllJugadores);
app.post('/jugadores', jugadoresController.createJugador);
app.put('/jugadores/:id', jugadoresController.updateJugador);
app.delete('/jugadores/:id', jugadoresController.deleteJugador);

// // Rutas de usuarios
// app.get('/usuarios', usuarioController.getAllUsuarios);
// app.post('/usuarios', usuarioController.createUsuario);
// app.put('/usuarios/:id', usuarioController.updateUsuario);
// app.delete('/usuarios/:id', usuarioController.deleteUsuario);

// Rutas de campeonatos
app.get('/campeonatos', campeonatoController.getAllCampeonato);
app.get('/campeonatos/:id', campeonatoController.findOneCampeonato);
app.post('/campeonatos', campeonatoController.createCampeonato);
app.put('/campeonatos/:id', campeonatoController.updateCampeonato);
app.delete('/campeonatos/:id', campeonatoController.deleteCampeonato);

// Rutas de partidos
app.get('/partidos', partidoController.getAllPartidos);
app.post('/partidos', partidoController.createPartido);
app.put('/partidos/:id', partidoController.updatePartido);
app.delete('/partidos/:id', partidoController.deletePartido);


export default app;

//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
