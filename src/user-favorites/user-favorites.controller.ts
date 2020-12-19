import { Controller, Delete, Get, Param, Body, Post, Put } from '@nestjs/common';
import { CreateUserFavoritesDto } from './dto';
import { UserFavoritesService } from './user-favorites.service';
import { ApiTags, ApiHeader, ApiCreatedResponse } from '@nestjs/swagger';

@ApiHeader({
  name: 'Get Favorites offers',
  description: 'Favorites Methods',
})
@ApiTags('APP Module')
@Controller('user-favorites')
export class UserFavoritesController {

    constructor(private readonly userfavoritesService: UserFavoritesService) {}

    @Get()
    async getMany() {
        return await this.userfavoritesService.getMany()
    }

    @Get(':id')
    async getOne(@Param('id') id) {
        const usersfavorite = await this.userfavoritesService.getOne(id)
        return (usersfavorite)
    }

    @Post()
    @ApiCreatedResponse({ description: 'User created' })
    async addOne(
        @Body() dto: CreateUserFavoritesDto
    ) {
        const usersfavorite = await this.userfavoritesService.addOne(dto)    
        return {message: "User created", usersfavorite}
    }


    @Delete(':id')
    async deleteOne(@Param('id') id) {
        return this.userfavoritesService.deleteOne(id)
    }
}