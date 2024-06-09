import sequelize from "../postgresDB/pgConfig";
import {Model,DataTypes, UUIDV4 } from 'sequelize';

interface EmployeeAttributes
{
    id:string;
    name:string;
    email:string;
    password:string;
    assignedShiftHours:number;
    role :string;
}

class Employee extends Model<EmployeeAttributes> implements EmployeeAttributes
{
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public assignedShiftHours!: number;
    public role!: string;
    
}

Employee.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            allowNull:false,
            primaryKey:true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          assignedShiftHours: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          role: {
            type: DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee'),
            allowNull: false,
          },
        },
        {
          sequelize,
          tableName: "employees",
          timestamps: false,
        }
      );
      
export { Employee };
      
      
      
      
      
      