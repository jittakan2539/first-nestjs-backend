import {Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

	constructor(private readonly usersService: UsersService) {}

	@Get()
	getAllUsers(@Query(`role`) role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
		return this.usersService.getAllUsers(role);
	}

	@Get(':id')
	getOneUser(@Param('id', ParseIntPipe) id: number) {
		return this.usersService.getOneUser(id);
	}

	@Post()
	createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
		return this.usersService.createUser(createUserDto);
	}

	@Patch(':id')
	updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
		return this.usersService.updateUser(id, updateUserDto);
	}

	@Delete(':id')
	deleteUser(@Param('id', ParseIntPipe) id: number) {
		return this.usersService.deleteUser(id);
	}
}
