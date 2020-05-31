import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { Employee } from './employee.model';
import { CassandraService } from 'src/common/cassandra/cassandra.service';

@Injectable()
export class EmployeeRepository implements OnModuleInit {

    constructor(private cassandraService: CassandraService) { }

    employeeMapper: mapping.ModelMapper<Employee>;

    onModuleInit() {
        const mappingOptions: mapping.MappingOptions = {
            models: {
                'Employee': {
                    tables: ['employee'],
                    mappings: new mapping.UnderscoreCqlToCamelCaseMappings
                }
            }
        }

        this.employeeMapper = this.cassandraService.createMapper(mappingOptions).forModel('Employee');
    }

    async getEmployees() {
        return (await this.employeeMapper.findAll()).toArray();
    }

    async getEmployeeById(id: number) {
        return (await this.employeeMapper.find({ empId: id})).toArray();
    }

    async createEmployee(employee: Employee) {
        return (await this.employeeMapper.insert(employee)).toArray();
    }

    async updateEmployeeName(id: number, name: string) {
        const employee = new Employee();
        employee.empId  = id;
        employee.firstName = name;
        return (await this.employeeMapper.update(employee, { fields: ['empId', 'firstName'], ifExists: true})).toArray();
    }
}
