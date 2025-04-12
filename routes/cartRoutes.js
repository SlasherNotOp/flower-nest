import express from 'express';
import { addToCart, getCartItems } from '../controllers/cartController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.post('/', addToCart);
router.get('/', getCartItems);

export default router;
