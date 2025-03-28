/* eslint-disable prettier/prettier */
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateGroupDto } from './create-group.dto';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
    @IsOptional()
    @ApiProperty({ description: 'Nombre del grupo' })
    @IsString()
    nombre?: string;
  
    @IsOptional()
    @ApiProperty({ description: 'ID del dispositivo asociado' })
    @IsNumber()
    dispositivo_id?: number;
  
    @IsOptional()
    @ApiProperty({ description: 'ID del usuario asociado' })
    @IsNumber()
    usuario_id?: number;
} 