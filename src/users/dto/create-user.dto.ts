/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({ example: '1', description: 'Grupo de dispositivos del usuario' })
    grupo_id: number;
    
    @ApiProperty({ example: '1', description: 'Rol del usuario' })
    rol_id: number;
    
    @ApiProperty({ example: 'Usuario', description: 'Nombre del usuario' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ example: 'user@test.com', description: 'Correo del usuario' })
    @IsEmail()
    @IsNotEmpty()
    correo_electronico: string;

    @ApiProperty({ example: 'pass1234', description: 'Contraseña del usuario' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: '2023-01-02-13:02:44', description: 'Fecha de creacion del usuario'})
    fecha_creacion: string;
}