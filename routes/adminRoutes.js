import express from 'express';
import { isAuthenticate } from '../middlewares/authenticate.js';
import { isAdmin } from '../middlewares/authorization.js';
import { getAllUsers, makeAdmin, makeUser } from '../controllers/adminController.js';

const router = express.Router();

router.get('/all-users', isAuthenticate, isAdmin, getAllUsers)
router.get('/make-user/:userid', isAuthenticate, isAdmin, makeUser)
router.get('/make-admin/:userid', isAuthenticate, isAdmin, makeAdmin)


export default router;


