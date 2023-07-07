import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PasswordModule } from './password/password.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: process.env.PG_DATABASE_USER,
      password: process.env.PG_DATABASE_PASSWORD,
      database: 'password_manager_api',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    PasswordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
