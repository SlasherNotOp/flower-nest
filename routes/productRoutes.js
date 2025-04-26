import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

router.use(protect);

router.post('/products', checkAdminOrSuperAdmin, createProduct);
router.put('/products/:id', checkAdminOrSuperAdmin, updateProduct);
router.delete('/products/:id', checkAdminOrSuperAdmin, deleteProduct);



export default router;
