import express from 'express';
import { createCustomOrder, getCustomOrders } from '../controllers/customOrderController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.post('/', createCustomOrder);
router.get('/', getCustomOrders);

export default router;
