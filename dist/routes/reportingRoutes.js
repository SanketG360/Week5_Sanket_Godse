"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportingRoutes = void 0;
const express_1 = require("express");
const reportingController_1 = require("../controllers/reportingController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
exports.reportingRoutes = router;
router.post('/report/generate', authMiddleware_1.default, reportingController_1.generateReportE);
router.post('/report/generate/excel', authMiddleware_1.default, reportingController_1.generateReportInExcelE);
//# sourceMappingURL=reportingRoutes.js.map