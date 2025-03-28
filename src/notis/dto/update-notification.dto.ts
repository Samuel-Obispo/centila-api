/* eslint-disable prettier/prettier */
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateNotificationDto } from './create-notification.dto';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {

    @IsOptional()
    @ApiProperty({ description: 'Mensaje de la notificación' })
    @IsString()
    mensaje?: string;
  
    
    @IsOptional()
    @ApiProperty({ description: 'Estado de la notificación', default: false })
    @IsBoolean()
    status?: boolean;
  
    
    @IsOptional()
    @ApiProperty({ description: 'ID del usuario asociado' })
    @IsNumber()
    usuario_id?: number;
} 