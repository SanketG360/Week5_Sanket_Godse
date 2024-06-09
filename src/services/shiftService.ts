import { Shift } from '../models/shiftModel';
import { Op } from 'sequelize';

async function startShift(employeeId:string) {
  try {
    const newShift = await Shift.create({
      employeeId,
      startTime: new Date(),
      endTime: null,
      actualHours: 0,
    });
    return newShift;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
}

async function endShift(employeeId:string) {
  try {
    const currentShift = await Shift.findOne({
      where: {
        employeeId,
        endTime: { [Op.is]: null },
      },
    });

    if (!currentShift) {
      throw new Error('on shift found');
    }

    const endTime = new Date();
    const actualHours = (endTime.getTime() - currentShift.startTime.getTime()) / (1000 * 60 * 60);

    currentShift.endTime = endTime;
    currentShift.actualHours = actualHours;
    await currentShift.save();

    return currentShift;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
}

async function getEmployeeShifts(employeeId:string) {
  try {
    const shifts = await Shift.findAll({ where:{employeeId} });
    return shifts;
  } catch(error) {
    console.error('error getting shifts', error);
    throw error;
  }
}

async function getAllShifts() {
  try {
    const shifts = await Shift.findAll();
    return shifts;
  } catch(error) {
    console.error('error getting all shifts', error);
    throw error;
  }
}

export { startShift, endShift, getEmployeeShifts, getAllShifts };
