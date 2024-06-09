"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRoutes = void 0;
const express_1 = require("express");
const employeeController_1 = require("../controllers/employeeController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
exports.employeeRoutes = router;
router.post('/register', employeeController_1.registerEmp);
router.post('/login', employeeController_1.loginEmp);
router.get('/employees', authMiddleware_1.default, employeeController_1.getAllEmp);
router.put('/employees/:id', authMiddleware_1.default, employeeController_1.updateEmp);
router.delete('/employees/:id', authMiddleware_1.default, employeeController_1.deleteEmp);
//# sourceMappingURL=employeeRoutes.js.map