import express from 'express';
import { userRegistration } from '../controllers/registrationController.js';

const router = express.Router();

router.post('/register', userRegistration)

export default router;