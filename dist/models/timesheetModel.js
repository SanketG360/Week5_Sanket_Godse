"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timesheet = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const employeeModel_1 = require("./employeeModel");
const shiftModel_1 = require("./shiftModel");
class Timesheet extends sequelize_1.Model {
}
exports.Timesheet = Timesheet;
Timesheet.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: employeeModel_1.Employee,
            key: 'id',
        },
    },
    shiftId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: shiftModel_1.Shift,
            key: 'id',
        },
    },
    projectName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    taskName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fromDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    toDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'timesheets',
    timestamps: false,
});
employeeModel_1.Employee.hasMany(Timesheet, { foreignKey: 'employeeId' });
Timesheet.belongsTo(employeeModel_1.Employee, { foreignKey: 'employeeId' });
shiftModel_1.Shift.hasMany(Timesheet, { foreignKey: 'shiftId' });
Timesheet.belongsTo(shiftModel_1.Shift, { foreignKey: 'shiftId' });
//# sourceMappingURL=timesheetModel.js.map