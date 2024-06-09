import express ,{Router} from 'express';
import authToken from '../middleware/authMiddleware';
import { createTimesheetE, getTimesheetByIdE, updateTimesheetE, deleteTimesheetE } from '../controllers/timesheetController';


const router = Router();

router.post('/timesheet', authToken, createTimesheetE);
router.get('/timesheet/:id', authToken, getTimesheetByIdE);

router.put('/timesheet/:id',authToken, updateTimesheetE);
router.delete('/timesheet/:id',authToken, deleteTimesheetE);

export { router as timesheetRoutes };