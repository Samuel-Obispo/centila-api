/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('Usuario')
@Controller('usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  //?? Con esta operación se intenta crear un nuevo usuario 
  @ApiOperation({summary: 'Crear un Usuario', description: 'Crea un Usuario'})
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {

    //?? Si se logra registrar un nuevo usuario, se indica que la acción fue exitosa
    try {
      const user = await this.userService.create(createUserDto);
      return {
        message: `El Usuario ${user.nombre} se ha registrado correctamente`,
      };
      
      //??En cambio si hubo algún error, se muestra un mensaje indicando que no se pudo realizar la acción
    } catch (error: any){
      throw new HttpException(
        'Datos incorrectos o error al registrar el Usuario',
        HttpStatus.BAD_REQUEST);
    }
  }

      //?? Con esta operación se muestran los usuarios de la base de datos
  @ApiOperation({summary: 'Mostrar todos los Usuarios', description: 'Muestra todos los Usuarios registrados'})
  @Get()
  findAll() {
    return this.userService.findAll();
  }

      //?? Con esta operación se muestra un usuario, dependiendo del identificador
  @ApiOperation({summary: 'Buscar un Usuario', description: 'Busca un Usuario por su id'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

      //?? Con esta operación se modifica un usuario, dependiendo del identificador
  @ApiOperation({summary: 'Modificar un Usuario', description: 'Modifica un Usuario por su id'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

      //?? Con esta operación se elimina un usuario, dependiendo del identificador
  @ApiOperation({summary: 'Eliminar un Usuario', description: 'Elimina un Usuario por su id'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
