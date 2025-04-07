// src/firebase/firebase.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Get('data')
  async getData(@Query('path') path: string) {
    const result = await this.firebaseService.getData(path);
    return result;
  }
}