/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DevicesService } from './devices.service';

@ApiTags('Dispositivos')
@Controller('dispositivos')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @ApiOperation({summary: 'Crear un Dispositivo', description: 'Crea un nuevo Dispositivo'})
  @Post()
  async create(@Body() createDeviceDto: CreateDeviceDto) {
    try {
      const device = await this.devicesService.create(createDeviceDto);
      return {
        message: `El Dispositivo ${device.nombre} se ha registrado correctamente`,
      };
    } catch (error: any) {
      throw new HttpException(
        'Datos incorrectos o error al registrar el Dispositivo',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @ApiOperation({summary: 'Mostrar todos los Dispositivos', description: 'Muestra todos los Dispositivos registrados'})
  @Get()
  findAll() {
    return this.devicesService.findAll();
  }

  @ApiOperation({summary: 'Buscar un Dispositivo', description: 'Busca un Dispositivo por su id'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicesService.findOne(Number(id));
  }

  @ApiOperation({summary: 'Modificar un Dispositivo', description: 'Modifica un Dispositivo por su id'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(+id, updateDeviceDto);
  }

  @ApiOperation({summary: 'Eliminar un Dispositivo', description: 'Elimina un Dispositivo por su id'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devicesService.remove(+id);
  }
} 