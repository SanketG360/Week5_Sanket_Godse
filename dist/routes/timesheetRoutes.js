"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timesheetRoutes = void 0;
const express_1 = require("express");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const timesheetController_1 = require("../controllers/timesheetController");
const router = (0, express_1.Router)();
exports.timesheetRoutes = router;
router.post('/timesheet', authMiddleware_1.default, timesheetController_1.createTimesheetE);
router.get('/timesheet/:id', authMiddleware_1.default, timesheetController_1.getTimesheetByIdE);
router.put('/timesheet/:id', authMiddleware_1.default, timesheetController_1.updateTimesheetE);
router.delete('/timesheet/:id', authMiddleware_1.default, timesheetController_1.deleteTimesheetE);
//# sourceMappingURL=timesheetRoutes.js.map