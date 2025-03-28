/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.roles.create({
      data: createRoleDto,
    });
  }

  async findAll() {
    return await this.prisma.roles.findMany();
  }

  findOne(id: number) {
    return this.prisma.roles.findUnique({
      where: { id_rol: id },
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.prisma.roles.update({
      where: { id_rol: id },
      data: updateRoleDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.roles.delete({
      where: { id_rol: id },
    });
  }
} 