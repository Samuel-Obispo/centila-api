/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    return await this.prisma.grupos.create({
      data: createGroupDto,
    });
  }

  async findAll() {
    return await this.prisma.grupos.findMany({
      include: {
        dispositivo: true,
        usuario: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.grupos.findUnique({
      where: { id_grupo: id },
      include: {
        dispositivo: true,
        usuario: true,
      },
    });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return await this.prisma.grupos.update({
      where: { id_grupo: id },
      data: updateGroupDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.grupos.delete({
      where: { id_grupo: id },
    });
  }
} 