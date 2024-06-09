"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const credentials_1 = __importDefault(require("../common/credentials"));
const sequelize = new sequelize_1.Sequelize({
    username: credentials_1.default.postgres.USERNAME,
    password: credentials_1.default.postgres.PASSWORD,
    host: credentials_1.default.postgres.HOST,
    database: credentials_1.default.postgres.DATABASE,
    port: credentials_1.default.postgres.DBPORT,
    dialect: 'postgres'
});
sequelize.authenticate().then(() => {
    console.log('Database Connection Established Successfully .......');
}).catch((err) => {
    console.log("Unable to connect to the database!!", err);
});
sequelize.sync().then(() => {
    console.log('table created successfully.');
}).catch((err) => {
    console.log("Unable to synchronize models...", err);
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map