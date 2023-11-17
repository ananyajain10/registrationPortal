import express from 'express';
import { sendOtp, verifyOtp } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', sendOtp);
router.post('/verify', verifyOtp);

export default router;