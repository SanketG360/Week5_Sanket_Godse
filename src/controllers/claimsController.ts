import { Request, Response } from 'express';
import { createClaim, getClaimById, updateClaim, deleteClaim } from '../services/claimsService';

export async function createClaimE(req:Request, res:Response) {
  try {
    const claimData = req.body;
    const claim = await createClaim(claimData);
    res.status(201).json(claim);
  } catch(error) {
    console.error('error while creating', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function getClaimByIdE(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const claim = await getClaimById(id);
    res.status(200).json(claim);
  } catch (error) {
    console.error('error while getting', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function updateClaimE(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const claim = await updateClaim(id, updateData);
    res.status(200).json(claim);
  } catch (error) {
    console.error('error while updating',error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function deleteClaimE(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const result = await deleteClaim(id);
    res.status(200).json(result);
  } catch (error) {
    console.error('error while deleting', error);
    res.status(500).json({error:'internal server error'});
  }
}



