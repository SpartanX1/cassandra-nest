import { CassandraModule } from './common/cassandra/cassandra.module';
import { EmployeeModule } from './employee/employee.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    CassandraModule,
    EmployeeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
