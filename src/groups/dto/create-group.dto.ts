/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({ description: 'Nombre del grupo' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'ID del dispositivo asociado' })
  @IsNumber()
  dispositivo_id: number;

  @ApiProperty({ description: 'ID del usuario asociado' })
  @IsNumber()
  usuario_id: number;
} 