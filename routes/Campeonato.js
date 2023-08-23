import express from 'express';
import * as campeonatoController from './controllers/campeonato.js';

const router = express.Router();

// Ruta para obtener todos los campeonatos
router.get('/campeonatos', campeonatoController.getAllCampeonato);

// Ruta para obtener un campeonato por su ID
router.get('/campeonatos/:id', campeonatoController.findOneCampeonato);

// Ruta para crear un nuevo campeonato
router.post('/campeonatos', campeonatoController.createCampeonato);

// Ruta para actualizar un campeonato por su ID
router.put('/campeonatos/:id', campeonatoController.updateCampeonato);

// Ruta para eliminar un campeonato por su ID
router.delete('/campeonatos/:id', campeonatoController.deleteCampeonato);

export default router;


//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
