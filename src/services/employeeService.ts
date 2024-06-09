import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Employee } from '../models/employeeModel';


const JWT_SECRET = process.env.JWT_SecretKey || 'fhrbdhasd';

async function registerEmployee(employeeData:any) {
  try {
    const hashedPassword = await bcrypt.hash(employeeData.password, 10);
    const employee = await Employee.create({...employeeData, password:hashedPassword});
    return employee;
  } catch (error) {
    console.error('error while registering', error);
    throw error;
  }
}

async function loginEmployee(email:string, password:string) {
  try {
    const employee = await Employee.findOne({where:{email}});
    if (!employee) throw new Error('invalid email or password');
    
    const isPasswordValid = await bcrypt.compare(password, employee.password);
    if (!isPasswordValid) throw new Error('invalid email or password');

    const token = jwt.sign({id:employee.id, role:employee.role}, JWT_SECRET, {expiresIn:'1d'});
    return { employee,token };
  } catch (error) {
    console.error('logging error', error);
    throw error;
  }
}


async function getAllEmployees() {
  try {
    const employees = await Employee.findAll();
    return employees;
  } catch (error) {
    console.error('error fetching employees:', error);
    throw error;
  }
}

async function updateEmployee(id:string, updateData:any) {
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) throw new Error('employee not found');
    
    await employee.update(updateData);
    return employee;
  } catch (error) {
    console.error('error updating employee:', error);
    throw error;
  }
}

async function deleteEmployee(id:string) {
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) throw new Error('employee not found');
    
    await employee.destroy();
    return { message: 'employee deleted' };
  } catch(error) {
    console.error('error deleting employee', error);
    throw error;
  }
}

export {registerEmployee, loginEmployee, getAllEmployees, updateEmployee, deleteEmployee}


