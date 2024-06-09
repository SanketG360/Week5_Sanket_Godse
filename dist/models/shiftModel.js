"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shift = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const employeeModel_1 = require("./employeeModel");
class Shift extends sequelize_1.Model {
}
exports.Shift = Shift;
Shift.init({
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
        }
    },
    startTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    actualHours: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'shifts',
    timestamps: false,
});
employeeModel_1.Employee.hasMany(Shift, { foreignKey: 'employeeId' });
Shift.belongsTo(employeeModel_1.Employee, { foreignKey: 'employeeId' });
//# sourceMappingURL=shiftModel.js.map