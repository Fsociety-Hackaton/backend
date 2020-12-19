import { Controller, Delete, Get, Param, Body, Post, Put, UseGuards, Req, Head } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JWTAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { CreateUserFavoritesDto } from './dto';
import { UserFavoritesService } from './user-favorites.service';

@Controller('user-favorites')
export class UserFavoritesController {

    constructor(private readonly userfavoritesService: UserFavoritesService) {}

    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @Get()
    getMany( ) {
        console.log();
        
        return this.userfavoritesService.getMany()
    }
    
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @Get(':id')
    getOne(@Param('id') id: string) {
        console.log(id)
        return this.userfavoritesService.getOne(id)
    }
    
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @Post()
    addOne(
        @Body() dto: CreateUserFavoritesDto
        ) {
            return this.userfavoritesService.addOne(dto);
        }
        
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()    
    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.userfavoritesService.deleteOne(id)
    }
}