import { Timesheet } from '../models/timesheetModel';

async function createTimesheet(timesheetData:any) {
  try {
    const timesheet = await Timesheet.create(timesheetData);
    return timesheet;
  } catch(error) {
    console.error('error creating timesheet', error);
    throw error;
  }
}

async function getTimesheetById(id:string) {
  try {
    const timesheet = await Timesheet.findByPk(id);
    if (!timesheet) {
      throw new Error('timesheet not found');
    }
    return timesheet;
  } catch(error) {
    console.error('error getting timesheet', error);
    throw error;
  }
}

async function updateTimesheet(id:string, updateData:any) {
  try {
    const timesheet = await Timesheet.findByPk(id);
    if (!timesheet) {
      throw new Error('timesheet not found');
    }
    await timesheet.update(updateData);
    return timesheet;
  } catch(error) {
    console.error('error updating timesheet', error);
    throw error;
  }
}

async function deleteTimesheet(id:string) {
  try {
    const timesheet = await Timesheet.findByPk(id);
    if (!timesheet) {
      throw new Error('timesheet not found');
    }
    await timesheet.destroy();
    return { message: 'timesheet deleted successfully' };
  } catch (error) {
    console.error('error deleting timesheet', error);
    throw error;
  }
}

export { createTimesheet, getTimesheetById, updateTimesheet, deleteTimesheet };
