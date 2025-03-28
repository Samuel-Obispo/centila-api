/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({ description: 'Nombre del grupo' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'ID del dispositivo asociado' })
  @IsNumber()
  @IsNotEmpty()
  dispositivo_id: number;

  @ApiProperty({ description: 'ID del usuario asociado' })
  @IsNumber()
  @IsNotEmpty()
  usuario_id: number;
} 