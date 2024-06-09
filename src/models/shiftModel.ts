import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Employee } from './employeeModel';


interface ShiftAttributes {
    id: string;
    employeeId: string;
    startTime: Date;
    endTime: Date | null;
    actualHours: number | null;
  }
  
interface ShiftCreationAttributes extends Optional<ShiftAttributes,'id' | 'endTime' | 'actualHours'> {}
  
  
class Shift extends Model<ShiftAttributes, ShiftCreationAttributes> implements ShiftAttributes {
    [x: string]: any;
    public id!: string;
    public employeeId!: string;
    public startTime!: Date;
    public endTime!: Date | null;
    public actualHours!: number | null;
  
}

Shift.init(
    {
        id:{

            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
           },
        employeeId:
        {
            type:DataTypes.UUID,
            allowNull:false,
            references:{
                model:Employee,
                key:'id',
            }
        },
        startTime: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          endTime: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          actualHours: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
          },
        },
        {
          sequelize,
          tableName: 'shifts',
          timestamps: false,
        }
);


Employee.hasMany(Shift,{foreignKey:'employeeId'});
Shift.belongsTo(Employee,{foreignKey:'employeeId'});

export {Shift};