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
exports.deleteEmp = exports.updateEmp = exports.getAllEmp = exports.loginEmp = exports.registerEmp = void 0;
const employeeService_1 = require("../services/employeeService");
function registerEmp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const empData = req.body;
            const emp = yield (0, employeeService_1.registerEmployee)(empData);
            res.status(201).json({ message: 'employee registered successfully', emp });
        }
        catch (error) {
            console.log('cannot register employee', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.registerEmp = registerEmp;
function loginEmp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const { employee, token } = yield (0, employeeService_1.loginEmployee)(email, password);
            res.status(200).json({ message: 'login successful', employee, token });
        }
        catch (error) {
            console.error('error logging', error);
            res.status(401).json({ error: 'invalid email or password' });
        }
    });
}
exports.loginEmp = loginEmp;
function getAllEmp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employees = yield (0, employeeService_1.getAllEmployees)();
            res.status(200).json(employees);
        }
        catch (error) {
            console.error('error fetching all employees', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getAllEmp = getAllEmp;
function updateEmp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const employee = yield (0, employeeService_1.updateEmployee)(id, updateData);
            res.status(200).json({ message: 'employee updated successfully', employee });
        }
        catch (error) {
            console.error('error updating employee', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateEmp = updateEmp;
function deleteEmp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, employeeService_1.deleteEmployee)(id);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error deleting employee', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteEmp = deleteEmp;
//# sourceMappingURL=employeeController.js.map