/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';

      //?? Aquí se importan los controladores y proveedores para su uso en el controlador
@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
