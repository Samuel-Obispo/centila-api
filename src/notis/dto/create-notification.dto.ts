/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty({ description: 'Mensaje de la notificación' })
  @IsString()
  mensaje: string;

  @ApiProperty({ description: 'Estado de la notificación', default: false })
  @IsBoolean()
  status: boolean;

  @ApiProperty({ description: 'ID del usuario asociado' })
  @IsNumber()
  usuario_id: number;
} 