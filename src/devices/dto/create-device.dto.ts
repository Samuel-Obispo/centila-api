/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateDeviceDto {
  @ApiProperty({ description: 'Tipo de dispositivo' })
  @IsString()
  tipo: string;

  @ApiProperty({ description: 'Nombre del dispositivo' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Dirección IP del dispositivo' })
  @IsString()
  direccion_ip: string;

  @ApiProperty({ description: 'Estado del dispositivo', default: true })
  @IsBoolean()
  status: boolean;
} 