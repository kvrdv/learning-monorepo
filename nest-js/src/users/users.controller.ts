import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
	// GET /users
	@Get()
	// eslint-disable-next-line
	findAll(@Query('role') role?: 'intern' | 'engineer' | 'admin') {
		return [];
	}

	// GET /users/id
	@Get(':id')
	findOne(@Param('id') id: string) {
		return { id };
	}

	// POST /users
	@Post()
	// eslint-disable-next-line
	create(@Body() user: {}) {
		return user;
	}

	// PATCH /users/id
	@Patch(':id')
	// eslint-disable-next-line
	update(@Param('id') id: string, @Body() userUpdate: {}) {
		return { id, ...userUpdate };
	}

	// DELETE /users/id
	@Delete(':id')
	delete(@Param('id') id: string) {
		return { id };
	}
}
