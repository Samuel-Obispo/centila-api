/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({summary: 'Crear un Rol', description: 'Crea un nuevo Rol'})
  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {
    try {
      const role = await this.rolesService.create(createRoleDto);
      return {
        message: `El Rol ${role.nombre} se ha registrado correctamente`,
      };
    } catch (error: any) {
      throw new HttpException(
        'Datos incorrectos o error al registrar el Rol',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @ApiOperation({summary: 'Mostrar todos los Roles', description: 'Muestra todos los Roles registrados'})
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @ApiOperation({summary: 'Buscar un Rol', description: 'Busca un Rol por su id'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(Number(id));
  }

  @ApiOperation({summary: 'Modificar un Rol', description: 'Modifica un Rol por su id'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @ApiOperation({summary: 'Eliminar un Rol', description: 'Elimina un Rol por su id'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
} 