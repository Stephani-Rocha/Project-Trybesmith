import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import UserMiddleware from '../middleware/userMiddleware';

const router = Router();

const loginController = new LoginController();
const userMiddleware = new UserMiddleware();

router.post('/login', userMiddleware.login, loginController.login);

export default router;