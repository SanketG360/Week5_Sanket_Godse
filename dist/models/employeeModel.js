"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const sequelize_1 = require("sequelize");
class Employee extends sequelize_1.Model {
}
exports.Employee = Employee;
Employee.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    assignedShiftHours: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee'),
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "employees",
    timestamps: false,
});
//# sourceMappingURL=employeeModel.js.map