import express ,{Router} from 'express';
import {registerEmp, loginEmp, getAllEmp ,updateEmp,deleteEmp}  from '../controllers/employeeController';
import authToken from '../middleware/authMiddleware';

const router = Router();


router.post('/register',registerEmp);
router.post('/login',loginEmp);

router.get('/employees',authToken,getAllEmp);
router.put('/employees/:id',authToken,updateEmp);
router.delete('/employees/:id',authToken,deleteEmp);

export {router as  employeeRoutes};
