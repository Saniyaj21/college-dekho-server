import express from 'express';
import { isAuthenticate } from '../middlewares/authenticate.js';
import { isAdmin } from '../middlewares/authorization.js';
import { addColleges, deleteCollege, getAllColleges, getCollegesDetails, searchByCourse } from '../controllers/collegeController.js';

const router = express.Router();

router.post('/add', isAuthenticate, isAdmin, addColleges)
router.get('/all-colleges', getAllColleges)
router.get('/:collegeid', getCollegesDetails)
router.delete('/:collegeid', isAuthenticate, isAdmin, deleteCollege)
router.get('/search/:keyword', searchByCourse)


export default router;


