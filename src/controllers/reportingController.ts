import { Request, Response } from 'express';
import { generateReport, generateReportInExcel } from '../services/reportingService';

export async function generateReportE(req:Request, res:Response) {
  try {
    const { startDate, endDate } = req.body;
    const report = await generateReport(new Date(startDate), new Date(endDate));
    res.status(200).json(report);
  } catch(error) {
    console.error('error generating report:', error);
    res.status(500).json({error:'internal server error'});
  }
}

export async function generateReportInExcelE(req:Request, res:Response) {
  try {
    const { startDate, endDate } = req.body;
    const buffer = await generateReportInExcel(new Date(startDate), new Date(endDate));

    res.setHeader('Content-Disposition','attachment; filename=report.xlsx');
    res.setHeader('Content-Type','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);
  } catch (error) {
    console.error('error generating report in excel:',error);
    res.status(500).json({error:'internal server error'});
  }
}




