/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ description: 'Nombre del rol' })
  @IsString()
  @IsNotEmpty()
  nombre: string;
} 