import { Request, Response } from 'express';
import { createTimesheet, getTimesheetById, updateTimesheet, deleteTimesheet } from '../services/timesheetService';

export async function createTimesheetE(req:Request, res:Response) {
  try {
    const timesheetData = req.body;
    const timesheet = await createTimesheet(timesheetData);
    res.status(201).json(timesheet);
  } catch(error) {
    console.error('error creating timesheet', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function getTimesheetByIdE(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const timesheet = await getTimesheetById(id);
    res.status(200).json(timesheet);
  } catch(error) {
    console.error('error getting timesheet', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function updateTimesheetE(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const timesheet = await updateTimesheet(id, updateData);
    res.status(200).json(timesheet);
  } catch(error) {
    console.error('error updating timesheet', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function deleteTimesheetE(req:Request, res:Response) {
  try {
    const id = req.params.id;
    const result = await deleteTimesheet(id);
    res.status(200).json(result);
  } catch(error) {
    console.error('error deleting timesheet', error);
    res.status(500).json({error:'internal server error'});
  }
}

