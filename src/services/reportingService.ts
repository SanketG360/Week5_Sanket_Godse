import { Shift } from '../models/shiftModel';
import { Employee } from '../models/employeeModel';
import { Op } from 'sequelize';
import * as ExcelJS from 'exceljs';

async function generateReport(startDate:Date, endDate:Date) {
  try {
    const shifts = await Shift.findAll({
      where: {
        startTime: {
          [Op.between]: [startDate, endDate],
        },
      },
      include: [
        {
          model: Employee,
          attributes: ['name', 'assignedShiftHours'],
        },
      ],
    });

    const reportData = shifts.map(shift => ({
      employeeName: shift.Employee.name,
      assignedShiftHours: shift.Employee.assignedShiftHours,
      actualHours: shift.actualHours,
      startTime: shift.startTime,
      endTime: shift.endTime,
    }));

    return reportData;
  } catch (error) {
    console.error('error generating report', error);
    throw error;
  }
}

async function generateReportInExcel(startDate:Date, endDate:Date) {
  const reportData = await generateReport(startDate, endDate);

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Report');

  worksheet.columns = [
    { header: 'Employee Name', key: 'employeeName', width: 30 },
    { header: 'Assigned Shift Hours', key: 'assignedShiftHours', width: 20 },
    { header: 'Actual Hours', key: 'actualHours', width: 20 },
    { header: 'Start Time', key: 'startTime', width: 30 },
    { header: 'End Time', key: 'endTime', width: 30 },
  ];

  reportData.forEach(data => {
    worksheet.addRow(data);
  });

  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
}

export { generateReport, generateReportInExcel };
