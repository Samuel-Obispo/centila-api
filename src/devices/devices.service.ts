/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DevicesService {
  constructor(private prisma: PrismaService) {}

  async create(createDeviceDto: CreateDeviceDto) {
    return await this.prisma.dispositivos.create({
      data: createDeviceDto,
    });
  }

  async findAll() {
    return await this.prisma.dispositivos.findMany();
  }

  findOne(id: number) {
    return this.prisma.dispositivos.findUnique({
      where: { id_dispositivo: id },
    });
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return await this.prisma.dispositivos.update({
      where: { id_dispositivo: id },
      data: updateDeviceDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.dispositivos.delete({
      where: { id_dispositivo: id },
    });
  }
} 