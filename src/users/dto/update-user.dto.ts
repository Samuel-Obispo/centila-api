/* eslint-disable prettier/prettier */
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto)  {

    @IsOptional()
    @ApiProperty({ description: 'Grupo de dispositivos del usuario' })
    grupo_id?: number;
    
    @IsOptional()
    @ApiProperty({ description: 'Rol del usuario' })
    rol_id?: number;
    
    @IsOptional()
    @ApiProperty({ description: 'Nombre del usuario' })
    @IsString()
    nombre?: string;

    @IsOptional()
    @ApiProperty({ description: 'Correo del usuario' })
    @IsEmail()
    correo_electronico?: string;
    
    @IsOptional()
    @ApiProperty({ description: 'Contraseña del usuario' })
    @IsString()
    password?: string;

}