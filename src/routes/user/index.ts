import { Router } from 'express';
import { getAllUsers } from '@controllers/user';

export const userRoutes = Router();

userRoutes.get('/', getAllUsers);
