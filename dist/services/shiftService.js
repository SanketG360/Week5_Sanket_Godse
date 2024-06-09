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
exports.getAllShifts = exports.getEmployeeShifts = exports.endShift = exports.startShift = void 0;
const shiftModel_1 = require("../models/shiftModel");
const sequelize_1 = require("sequelize");
function startShift(employeeId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newShift = yield shiftModel_1.Shift.create({
                employeeId,
                startTime: new Date(),
                endTime: null,
                actualHours: 0,
            });
            return newShift;
        }
        catch (error) {
            console.error('error', error);
            throw error;
        }
    });
}
exports.startShift = startShift;
function endShift(employeeId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const currentShift = yield shiftModel_1.Shift.findOne({
                where: {
                    employeeId,
                    endTime: { [sequelize_1.Op.is]: null },
                },
            });
            if (!currentShift) {
                throw new Error('on shift found');
            }
            const endTime = new Date();
            const actualHours = (endTime.getTime() - currentShift.startTime.getTime()) / (1000 * 60 * 60);
            currentShift.endTime = endTime;
            currentShift.actualHours = actualHours;
            yield currentShift.save();
            return currentShift;
        }
        catch (error) {
            console.error('error', error);
            throw error;
        }
    });
}
exports.endShift = endShift;
function getEmployeeShifts(employeeId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shifts = yield shiftModel_1.Shift.findAll({ where: { employeeId } });
            return shifts;
        }
        catch (error) {
            console.error('error getting shifts', error);
            throw error;
        }
    });
}
exports.getEmployeeShifts = getEmployeeShifts;
function getAllShifts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shifts = yield shiftModel_1.Shift.findAll();
            return shifts;
        }
        catch (error) {
            console.error('error getting all shifts', error);
            throw error;
        }
    });
}
exports.getAllShifts = getAllShifts;
//# sourceMappingURL=shiftService.js.map