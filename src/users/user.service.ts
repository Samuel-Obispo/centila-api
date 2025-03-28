/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService){}
  //?? Con esta función se inserta un nuevo usuario en la base de datos
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: createUserDto})
  }

  //?? Con esta función se buscan todos los usuarios dentro de la base de datos
  async findAll() {
    return await this.prisma.user.findMany();
  }

  //?? Con esta función se busca un usuario en específico dentro de la base de datos, dependiendo del identificador
  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  //?? Con esta función se actualiza un usuario dentro de la base de datos, dependiendo del identificador
  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  //?? Con esta función se elimina un usaurio dentro de la base de datos, dependiendo del identificador
  async remove(id: number) {
    return await this.prisma.user.delete({
      where : { id },
    });
  }
}
