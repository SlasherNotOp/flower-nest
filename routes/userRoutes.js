import express from 'express';
import { registerUser, loginUser, changeUserRole } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.put('/change-role', protect, changeUserRole);

export default router;
