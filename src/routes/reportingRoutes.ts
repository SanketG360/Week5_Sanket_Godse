import { Router } from 'express';
import { generateReportE, generateReportInExcelE } from '../controllers/reportingController';
import authToken from '../middleware/authMiddleware';

const router = Router();

router.post('/report/generate',authToken, generateReportE);
router.post('/report/generate/excel',authToken, generateReportInExcelE);

export { router as reportingRoutes };
