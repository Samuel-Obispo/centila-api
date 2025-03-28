/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotisService } from './notis.service';
import { NotisController } from './notis.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NotisController],
  providers: [NotisService, PrismaService],
})
export class NotisModule {} 