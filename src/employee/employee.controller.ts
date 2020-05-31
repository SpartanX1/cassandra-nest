import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDTO } from './dto/create-employee.dto';
import { UpdateEmployeeDTO } from './dto/update-employee.dto';

@Controller()
export class EmployeeController {
    
    constructor(private employeeService: EmployeeService){}

    @Get('employees')
    async getEmployees() {
        return this.employeeService.getEmployees();
    }

    @Get('employees/:id')
    async getEmployeeById(@Param('id') id: number) {
        return this.employeeService.getEmployeeById(id);
    }

    @Put('employees/:id')
    async updateEmployeeById(@Param('id') id: number, @Body() employee: UpdateEmployeeDTO) {
        return this.employeeService.updateEmployeeName(id, employee.firstName);
    }

    @Post('employees')
    async createEmployee(@Body() employee: CreateEmployeeDTO) {
        return this.employeeService.createEmployee(employee);
    }
}
