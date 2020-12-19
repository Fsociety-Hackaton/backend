import { Controller, Delete, Get, Param, Body, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JWTAuthGuard } from 'src/auth/guards/jwtAuth.guard';
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

    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @Get()
    async getMany() {
        return await this.userfavoritesService.getMany()
    }
    
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @Get(':id')
    async getOne(@Param('id') id) {
        
        const usersfavorite = await this.userfavoritesService.getOne(id)
        return (usersfavorite)
    }
    
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @Post()
    @ApiCreatedResponse({ description: 'User created' })
    async addOne(
        @Body() dto: CreateUserFavoritesDto
        ) {
            const usersfavorite = await this.userfavoritesService.addOne(dto)    
            return {message: "User created", usersfavorite}
        }
        
        
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @Delete(':id')
    async deleteOne(@Param('id') id) {
        return this.userfavoritesService.deleteOne(id)
    }
}