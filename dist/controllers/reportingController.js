"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReportInExcelE = exports.generateReportE = void 0;
const reportingService_1 = require("../services/reportingService");
function generateReportE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { startDate, endDate } = req.body;
            const report = yield (0, reportingService_1.generateReport)(new Date(startDate), new Date(endDate));
            res.status(200).json(report);
        }
        catch (error) {
            console.error('error generating report:', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.generateReportE = generateReportE;
function generateReportInExcelE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { startDate, endDate } = req.body;
            const buffer = yield (0, reportingService_1.generateReportInExcel)(new Date(startDate), new Date(endDate));
            res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.send(buffer);
        }
        catch (error) {
            console.error('error generating report in excel:', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.generateReportInExcelE = generateReportInExcelE;
//# sourceMappingURL=reportingController.js.map