import express from 'express';
import { placeOrder, getOrders } from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.post('/', placeOrder);
router.get('/', getOrders);

export default router;
