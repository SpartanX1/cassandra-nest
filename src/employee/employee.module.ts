import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Module } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';
import { CassandraModule } from 'src/common/cassandra/cassandra.module';

@Module({
    imports: [CassandraModule],
    controllers: [EmployeeController],
    providers: [
        EmployeeService,
        EmployeeRepository
    ],
    exports: [
        EmployeeService,
        EmployeeRepository
    ]
})
export class EmployeeModule { }
