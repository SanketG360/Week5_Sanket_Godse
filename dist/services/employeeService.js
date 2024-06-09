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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.getAllEmployees = exports.loginEmployee = exports.registerEmployee = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const employeeModel_1 = require("../models/employeeModel");
const JWT_SECRET = process.env.JWT_SecretKey || 'fhrbdhasd';
function registerEmployee(employeeData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashedPassword = yield bcrypt_1.default.hash(employeeData.password, 10);
            const employee = yield employeeModel_1.Employee.create(Object.assign(Object.assign({}, employeeData), { password: hashedPassword }));
            return employee;
        }
        catch (error) {
            console.error('error while registering', error);
            throw error;
        }
    });
}
exports.registerEmployee = registerEmployee;
function loginEmployee(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employee = yield employeeModel_1.Employee.findOne({ where: { email } });
            if (!employee)
                throw new Error('invalid email or password');
            const isPasswordValid = yield bcrypt_1.default.compare(password, employee.password);
            if (!isPasswordValid)
                throw new Error('invalid email or password');
            const token = jsonwebtoken_1.default.sign({ id: employee.id, role: employee.role }, JWT_SECRET, { expiresIn: '1d' });
            return { employee, token };
        }
        catch (error) {
            console.error('logging error', error);
            throw error;
        }
    });
}
exports.loginEmployee = loginEmployee;
function getAllEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employees = yield employeeModel_1.Employee.findAll();
            return employees;
        }
        catch (error) {
            console.error('error fetching employees:', error);
            throw error;
        }
    });
}
exports.getAllEmployees = getAllEmployees;
function updateEmployee(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employee = yield employeeModel_1.Employee.findByPk(id);
            if (!employee)
                throw new Error('employee not found');
            yield employee.update(updateData);
            return employee;
        }
        catch (error) {
            console.error('error updating employee:', error);
            throw error;
        }
    });
}
exports.updateEmployee = updateEmployee;
function deleteEmployee(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employee = yield employeeModel_1.Employee.findByPk(id);
            if (!employee)
                throw new Error('employee not found');
            yield employee.destroy();
            return { message: 'employee deleted' };
        }
        catch (error) {
            console.error('error deleting employee', error);
            throw error;
        }
    });
}
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=employeeService.js.map