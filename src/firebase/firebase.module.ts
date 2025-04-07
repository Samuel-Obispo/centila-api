/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FirebaseController } from './firebase.controller';
import { FirebaseService } from './firebase.service';

      //?? Aquí se importan los controladores y proveedores para su uso en el controlador
@Module({
  controllers: [FirebaseController],
  providers: [FirebaseService],
})
export class FirebaseModule {}
