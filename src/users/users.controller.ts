import {Body, Controller, Delete, Get, Param, Patch, Post, Query,} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

	constructor(private readonly usersService: UsersService) {}

	@Get()
	getAllUsers(@Query(`role`) role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
		return this.usersService.getAllUsers(role);
	}

	@Get(':id')
	getOneUser(@Param('id') id: string) {
		return this.usersService.getOneUser(+id);
	}

	@Post()
	createUser(@Body() user: {
		name: string;
		email: string;
		role: 'INTERN' | 'ENGINEER' | 'ADMIN';
	}) {
		return this.usersService.createUser(user);
	}

	@Patch(':id')
	updateUser(@Param('id') id: string, @Body() updatedUser: {
		name?: string;
		email?: string;
		role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
	}) {
		return this.usersService.updateUser(+id, updatedUser);
	}

	@Delete(':id')
	deleteUser(@Param('id') id: string) {
		return this.usersService.deleteUser(+id);
	}
}
