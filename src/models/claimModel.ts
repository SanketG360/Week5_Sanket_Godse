import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Employee } from './employeeModel';

interface ClaimsAttributes {
  id: string;
  key: string;
  value: string;
  employeeId: string;
}

interface ClaimsCreationAttributes extends Optional<ClaimsAttributes,'id'> {}

class Claims extends Model<ClaimsAttributes,ClaimsCreationAttributes> implements ClaimsAttributes {
  public id!: string;
  public key!: string;
  public value!: string;
  public employeeId!: string;

}



Claims.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      key: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employeeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: Employee,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'claims',
      timestamps: false,
    }
  );
  

Employee.hasMany(Claims, {foreignKey:'employeeId'});
Claims.belongsTo(Employee, {foreignKey:'employeeId'});
  
  
  export { Claims };
  
  
  
  
  