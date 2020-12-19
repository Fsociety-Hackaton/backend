import { Controller, Delete, Get, Param, Body, Post, Put } from '@nestjs/common';
import { CreateUserFavoritesDto } from './dto';
import { UserFavoritesService } from './user-favorites.service';

@Controller('user-favorites')
export class UserFavoritesController {

    constructor(private readonly userfavoritesService: UserFavoritesService) {}

    @Get()
    getMany() {
        return this.userfavoritesService.getMany()
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        console.log(id)
        return this.userfavoritesService.getOne(id)
    }

    @Post()
    addOne(
        @Body() dto: CreateUserFavoritesDto
    ) {
        return this.userfavoritesService.addOne(dto);
    }


    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.userfavoritesService.deleteOne(id)
    }
}