import { Module } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import * as entities  from "./entity";

const postgresConnection = (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities,
    synchronize: true,
});

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: postgresConnection
        }),
    ],
})
export class DatabaseModule { }