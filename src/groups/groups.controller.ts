/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GroupsService } from './groups.service';

@ApiTags('Grupos')
@Controller('grupos')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @ApiOperation({summary: 'Crear un Grupo', description: 'Crea un nuevo Grupo'})
  @Post()
  async create(@Body() createGroupDto: CreateGroupDto) {
    try {
      const group = await this.groupsService.create(createGroupDto);
      return {
        message: `El Grupo ${group.nombre} se ha registrado correctamente`,
      };
    } catch (error: any) {
      throw new HttpException(
        'Datos incorrectos o error al registrar el Grupo',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @ApiOperation({summary: 'Mostrar todos los Grupos', description: 'Muestra todos los Grupos registrados'})
  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @ApiOperation({summary: 'Buscar un Grupo', description: 'Busca un Grupo por su id'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(Number(id));
  }

  @ApiOperation({summary: 'Modificar un Grupo', description: 'Modifica un Grupo por su id'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(+id, updateGroupDto);
  }

  @ApiOperation({summary: 'Eliminar un Grupo', description: 'Elimina un Grupo por su id'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(+id);
  }
} 