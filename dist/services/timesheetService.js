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
exports.deleteTimesheet = exports.updateTimesheet = exports.getTimesheetById = exports.createTimesheet = void 0;
const timesheetModel_1 = require("../models/timesheetModel");
function createTimesheet(timesheetData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const timesheet = yield timesheetModel_1.Timesheet.create(timesheetData);
            return timesheet;
        }
        catch (error) {
            console.error('error creating timesheet', error);
            throw error;
        }
    });
}
exports.createTimesheet = createTimesheet;
function getTimesheetById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const timesheet = yield timesheetModel_1.Timesheet.findByPk(id);
            if (!timesheet) {
                throw new Error('timesheet not found');
            }
            return timesheet;
        }
        catch (error) {
            console.error('error getting timesheet', error);
            throw error;
        }
    });
}
exports.getTimesheetById = getTimesheetById;
function updateTimesheet(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const timesheet = yield timesheetModel_1.Timesheet.findByPk(id);
            if (!timesheet) {
                throw new Error('timesheet not found');
            }
            yield timesheet.update(updateData);
            return timesheet;
        }
        catch (error) {
            console.error('error updating timesheet', error);
            throw error;
        }
    });
}
exports.updateTimesheet = updateTimesheet;
function deleteTimesheet(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const timesheet = yield timesheetModel_1.Timesheet.findByPk(id);
            if (!timesheet) {
                throw new Error('timesheet not found');
            }
            yield timesheet.destroy();
            return { message: 'timesheet deleted successfully' };
        }
        catch (error) {
            console.error('error deleting timesheet', error);
            throw error;
        }
    });
}
exports.deleteTimesheet = deleteTimesheet;
//# sourceMappingURL=timesheetService.js.map