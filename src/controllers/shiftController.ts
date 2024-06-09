import { Request, Response } from 'express';
import { startShift, endShift, getEmployeeShifts, getAllShifts } from '../services/shiftService';

export async function startShiftE(req:Request, res:Response) {
  try {
    const {employeeId} = req.body;
    const shift = await startShift(employeeId);
    res.status(201).json(shift);
  } catch(error) {
    console.error('error starting shift', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function endShiftE(req:Request, res:Response) {
  try {
    const {employeeId} = req.body;
    const shift = await endShift(employeeId);
    res.status(200).json(shift);
  } catch (error) {
    console.error('error ending shift', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function getEmployeeShiftsE(req:Request, res:Response) {
  try {
    const { employeeId } = req.params;
    const shifts = await getEmployeeShifts(employeeId);
    res.status(200).json(shifts);
  } catch (error) {
    console.error('error getting employees shifts', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function getAllShiftsE(req:Request, res:Response) {
  try {
    const shifts = await getAllShifts();
    res.status(200).json(shifts);
  } catch (error) {
    console.error('error getting all shifts', error);
    res.status(500).json({error:'internal server error'});
  }
}



