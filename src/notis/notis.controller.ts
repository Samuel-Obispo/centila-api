/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NotisService } from './notis.service';

@ApiTags('Notificaciones')
@Controller('notificaciones')
export class NotisController {
  constructor(private readonly notisService: NotisService) {}

  @ApiOperation({summary: 'Crear una Notificación', description: 'Crea una nueva Notificación'})
  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    try {
      const notification = await this.notisService.create(createNotificationDto);
      return {
        message: `La Notificación se ha registrado correctamente`,
      };
    } catch (error: any) {
      throw new HttpException(
        'Datos incorrectos o error al registrar la Notificación',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @ApiOperation({summary: 'Mostrar todas las Notificaciones', description: 'Muestra todas las Notificaciones registradas'})
  @Get()
  findAll() {
    return this.notisService.findAll();
  }

  @ApiOperation({summary: 'Buscar una Notificación', description: 'Busca una Notificación por su id'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notisService.findOne(Number(id));
  }

  @ApiOperation({summary: 'Modificar una Notificación', description: 'Modifica una Notificación por su id'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.notisService.update(+id, updateNotificationDto);
  }

  @ApiOperation({summary: 'Eliminar una Notificación', description: 'Elimina una Notificación por su id'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notisService.remove(+id);
  }
} 