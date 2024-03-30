import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'hrSystem',
      entities: [],
      synchronize: true,
    }),
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
