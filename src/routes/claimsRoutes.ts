import express ,{ Router } from 'express';
import { createClaimE, getClaimByIdE, updateClaimE, deleteClaimE } from '../controllers/claimsController';
import authToken from '../middleware/authMiddleware';

const router = Router();

router.post('/claims', authToken,createClaimE);
router.get('/claims/:id', authToken,  getClaimByIdE);
router.put('/claims/:id', authToken,  updateClaimE);
router.delete('/claims/:id', authToken,  deleteClaimE);

export { router as claimsRoutes };
