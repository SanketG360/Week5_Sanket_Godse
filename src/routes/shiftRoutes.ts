import express ,{Router} from 'express';
import { startShiftE, endShiftE, getEmployeeShiftsE, getAllShiftsE } from '../controllers/shiftController';
import authToken from '../middleware/authMiddleware';

const router = Router();

router.post('/shift/start', authToken, startShiftE);
router.post('/shift/end', authToken, endShiftE);

router.get('/shift/:employeeId', authToken, getEmployeeShiftsE);
router.get('/shifts', authToken, getAllShiftsE);

export { router as shiftRoutes };