import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);



router.post('/products', protect, checkAdminOrSuperAdmin, createProduct);
router.put('/products/:id', protect, checkAdminOrSuperAdmin, updateProduct);
router.delete('/products/:id',protect, checkAdminOrSuperAdmin, deleteProduct);



export default router;
