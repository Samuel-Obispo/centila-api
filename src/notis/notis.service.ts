/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotisService {
  constructor(private prisma: PrismaService) {}

  async create(createNotificationDto: CreateNotificationDto) {
    return await this.prisma.notificaciones.create({
      data: createNotificationDto,
    });
  }

  async findAll() {
    return await this.prisma.notificaciones.findMany({
      include: {
        usuario: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.notificaciones.findUnique({
      where: { id_notificacion: id },
      include: {
        usuario: true,
      },
    });
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return await this.prisma.notificaciones.update({
      where: { id_notificacion: id },
      data: updateNotificationDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.notificaciones.delete({
      where: { id_notificacion: id },
    });
  }
} 