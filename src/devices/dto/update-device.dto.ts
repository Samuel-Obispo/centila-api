/* eslint-disable prettier/prettier */
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateDeviceDto } from './create-device.dto';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateDeviceDto extends PartialType(CreateDeviceDto) {
    @IsOptional()
    @ApiProperty({ description: 'Tipo de dispositivo' })
    @IsString()
    tipo?: string;
  
    @IsOptional()
    @ApiProperty({ description: 'Nombre del dispositivo' })
    @IsString()
    nombre?: string;
  
    @IsOptional()
    @ApiProperty({ description: 'Dirección IP del dispositivo' })
    @IsString()
    direccion_ip?: string;
  
    @IsOptional()
    @ApiProperty({ description: 'Estado del dispositivo', default: true })
    @IsBoolean()
    status?: boolean;
} 