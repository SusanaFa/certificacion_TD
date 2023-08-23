import express from 'express';
import { createProduct, getProductById, getAllProducts } from '../controllers/controller2.js'; // Ajusta las rutas según tu estructura

const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;






//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
