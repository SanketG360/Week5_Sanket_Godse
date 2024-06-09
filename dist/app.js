"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const employeeRoutes_1 = require("./routes/employeeRoutes");
const shiftRoutes_1 = require("./routes/shiftRoutes");
const timesheetRoutes_1 = require("./routes/timesheetRoutes");
const claimsRoutes_1 = require("./routes/claimsRoutes");
const reportingRoutes_1 = require("./routes/reportingRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log('Hello.........');
});
app.use('/api/employee', employeeRoutes_1.employeeRoutes);
app.use('/api/shifts', shiftRoutes_1.shiftRoutes);
app.use('/api/timesheets', timesheetRoutes_1.timesheetRoutes);
app.use('/api/claims', claimsRoutes_1.claimsRoutes);
app.use('/api/report', reportingRoutes_1.reportingRoutes);
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
//# sourceMappingURL=app.js.map