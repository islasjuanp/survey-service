import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          port: configService.get<number>('db.port'),
          host: configService.get<string>('db.host'),
          username: configService.get<string>('db.user'),
          password: configService.get<string>('db.pass'),
          database: configService.get<string>('db.name'),
          synchronize: configService.get<string>('env') === 'dev',
          entities: [],
          logging: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
