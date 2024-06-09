import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Employee } from './employeeModel';
import { Shift } from './shiftModel';

interface TimesheetAttributes {
    id: string;
    employeeId: string;
    shiftId: string;
    projectName: string;
    taskName: string;
    fromDate: Date;
    toDate: Date;
}

interface TimesheetCreationAttributes extends Optional<TimesheetAttributes, 'id'> {}

class Timesheet extends Model<TimesheetAttributes, TimesheetCreationAttributes> implements TimesheetAttributes {
  public id!: string;
  public employeeId!: string;
  public shiftId!: string;
  public projectName!: string;
  public taskName!: string;
  public fromDate!: Date;
  public toDate!: Date;

}

Timesheet.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      employeeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: Employee,
          key: 'id',
        },
      },
      shiftId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: Shift,
          key: 'id',
        },
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      taskName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      toDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'timesheets',
      timestamps: false,
    }
  );


Employee.hasMany(Timesheet, {foreignKey:'employeeId'});
Timesheet.belongsTo(Employee, {foreignKey:'employeeId'});
Shift.hasMany(Timesheet, {foreignKey:'shiftId'});
Timesheet.belongsTo(Shift, {foreignKey:'shiftId'});
  
export { Timesheet };