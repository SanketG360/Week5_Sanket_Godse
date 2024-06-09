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
exports.deleteTimesheetE = exports.updateTimesheetE = exports.getTimesheetByIdE = exports.createTimesheetE = void 0;
const timesheetService_1 = require("../services/timesheetService");
function createTimesheetE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const timesheetData = req.body;
            const timesheet = yield (0, timesheetService_1.createTimesheet)(timesheetData);
            res.status(201).json(timesheet);
        }
        catch (error) {
            console.error('error creating timesheet', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createTimesheetE = createTimesheetE;
function getTimesheetByIdE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const timesheet = yield (0, timesheetService_1.getTimesheetById)(id);
            res.status(200).json(timesheet);
        }
        catch (error) {
            console.error('error getting timesheet', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getTimesheetByIdE = getTimesheetByIdE;
function updateTimesheetE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const timesheet = yield (0, timesheetService_1.updateTimesheet)(id, updateData);
            res.status(200).json(timesheet);
        }
        catch (error) {
            console.error('error updating timesheet', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateTimesheetE = updateTimesheetE;
function deleteTimesheetE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, timesheetService_1.deleteTimesheet)(id);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error deleting timesheet', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteTimesheetE = deleteTimesheetE;
//# sourceMappingURL=timesheetController.js.map