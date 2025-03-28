/* eslint-disable prettier/prettier */
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @IsOptional()
    @ApiProperty({ example: 'Usuario', description: 'Nombre del usuario' })
    @IsString()
    nombre?: string;
} 