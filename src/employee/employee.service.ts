import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
    
    constructor(private employeeRepository: EmployeeRepository){}

    async getEmployees() {
        return this.employeeRepository.getEmployees();
    }

    async getEmployeeById(id: number) {
        return this.employeeRepository.getEmployeeById(id);
    }

    async createEmployee(employee: Employee) {
        return this.employeeRepository.createEmployee(employee);
    }

    async updateEmployeeName(id: number, name: string) {
        return this.employeeRepository.updateEmployeeName(id, name);
    }
}
