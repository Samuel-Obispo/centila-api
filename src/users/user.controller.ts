/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('Usuario')
@Controller('usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Crear un Usuario', description: 'Crea un Usuario'})
  @Post()
  async create(@Body() createAdministradorDto: CreateUserDto) {
    try {
      const administrador = await this.userService.create(createAdministradorDto);
      return {
        message: `El Usuario ${administrador.nombre} se ha registrado correctamente`,
      };
    } catch (error: any){
      throw new HttpException(
        'Datos incorrectos o error al registrar el Usuario',
        HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOperation({summary: 'Mostrar todos los Usuarios', description: 'Muestra todos los Usuarios registrados'})
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({summary: 'Buscar un Usuario', description: 'Busca un Usuario por su id'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @ApiOperation({summary: 'Modificar un Usuario', description: 'Modifica un Usuario por su id'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({summary: 'Eliminar un Usuario', description: 'Elimina un Usuario por su id'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
