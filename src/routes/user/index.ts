import { Router } from 'express';
import { getAllUsers } from '../../controllers/user.controller';

export const userRoutes = Router();

userRoutes.get('/', getAllUsers);
