/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    //??AQUI SE MUESTRA UN EJEMPLO DEL FORMATO DE UN NUEVO USUARIO
    
    @ApiProperty({ description: 'Grupo de dispositivos del usuario' })
    @IsNotEmpty()
    grupo_id: number;
    
    @ApiProperty({ description: 'Rol del usuario' })
    @IsNotEmpty()
    rol_id: number;
    
    @ApiProperty({ description: 'Nombre del usuario' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Correo del usuario' })
    @IsEmail()
    @IsNotEmpty()
    correo_electronico: string;

    @ApiProperty({ description: 'Contraseña del usuario' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ description: 'Fecha de creacion del usuario'})
    fecha_creacion: string;
}