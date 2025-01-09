import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
	private users = [
		{
			id: 1,
			name: 'Amanda Collins',
			email: 'amanda.collins@example.com',
			role: 'ENGINEER',
		},
		{
			id: 2,
			name: 'Brian Carter',
			email: 'brian.carter@example.com',
			role: 'INTERN',
		},
		{
			id: 3,
			name: 'Catherine Miller',
			email: 'catherine.miller@example.com',
			role: 'ADMIN',
		},
		{
			id: 4,
			name: 'Derek Smith',
			email: 'derek.smith@example.com',
			role: 'ENGINEER',
		},
		{
			id: 5,
			name: 'Elaine Foster',
			email: 'elaine.foster@example.com',
			role: 'INTERN',
		},
		{
			id: 6,
			name: 'Frank Turner',
			email: 'frank.turner@example.com',
			role: 'ADMIN',
		},
		{
			id: 7,
			name: 'Grace Hall',
			email: 'grace.hall@example.com',
			role: 'ENGINEER',
		},
	];

	getAllUsers(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
		if (role) {
			return this.users.filter((user) => user.role === role);
		}
		return this.users;
	}

	getOneUser(id: number) {
		const user = this.users.find((user) => user.id === id);
		return user;
	}

	createUser(createUserDto: CreateUserDto) {
		//----This is to create Id, unnecessary if database is used.
		const userByHighestId = [...this.users].sort((a, b) => b.id - a.id); //sort highest to lowest
		const newUser = {
			id: userByHighestId[0].id + 1,
			...createUserDto,
		};
		this.users.push(newUser);
		return newUser;
	}

	updateUser(id: number, updateUserDto: UpdateUserDto) {
		this.users = this.users.map((user) => {
			if (user.id === id) {
				return { ...user, ...updateUserDto };
			}
			return user;
		});

		return this.getOneUser(id); //To show the updated
	}

	deleteUser(id: number) {
		const removedUser = this.getOneUser(id);

		this.users = this.users.filter((user) => user.id !== id);

		return removedUser;
	}
}
