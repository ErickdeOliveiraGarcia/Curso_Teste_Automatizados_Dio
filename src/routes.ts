import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();


router.post('/usuarios', createUserController.handle)

export {router}