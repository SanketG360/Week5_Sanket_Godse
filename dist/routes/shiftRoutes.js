"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftRoutes = void 0;
const express_1 = require("express");
const shiftController_1 = require("../controllers/shiftController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
exports.shiftRoutes = router;
router.post('/shift/start', authMiddleware_1.default, shiftController_1.startShiftE);
router.post('/shift/end', authMiddleware_1.default, shiftController_1.endShiftE);
router.get('/shift/:employeeId', authMiddleware_1.default, shiftController_1.getEmployeeShiftsE);
router.get('/shifts', authMiddleware_1.default, shiftController_1.getAllShiftsE);
//# sourceMappingURL=shiftRoutes.js.map