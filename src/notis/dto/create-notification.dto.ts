/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty({ description: 'Mensaje de la notificación' })
  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @ApiProperty({ description: 'Estado de la notificación', default: false })
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @ApiProperty({ description: 'ID del usuario asociado' })
  @IsNumber()
  @IsNotEmpty()
  usuario_id: number;
} 