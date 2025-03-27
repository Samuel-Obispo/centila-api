/* eslint-disable prettier/prettier */
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto)  {
    
    @IsOptional()
    @ApiProperty({ example: 'Usuario', description: 'Nombre del usuario' })
    @IsString()
    nombre?: string;

    @IsOptional()
    @ApiProperty({ example: 'user@test.com', description: 'Correo del usuario' })
    @IsEmail()
    correo_electronico?: string;
    
    @IsOptional()
    @ApiProperty({ example: 'pass1234', description: 'Contraseña del usuario' })
    @IsString()
    password?: string;

}