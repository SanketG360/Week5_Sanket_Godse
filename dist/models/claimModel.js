"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Claims = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const employeeModel_1 = require("./employeeModel");
class Claims extends sequelize_1.Model {
}
exports.Claims = Claims;
Claims.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: employeeModel_1.Employee,
            key: 'id',
        },
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'claims',
    timestamps: false,
});
employeeModel_1.Employee.hasMany(Claims, { foreignKey: 'employeeId' });
Claims.belongsTo(employeeModel_1.Employee, { foreignKey: 'employeeId' });
//# sourceMappingURL=claimModel.js.map