import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JWTAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { CreateUserDto } from './dto';
import { UsersService } from './users.service'
import { ApiTags, ApiHeader, ApiCreatedResponse } from '@nestjs/swagger';

@ApiHeader({
  name: 'Get All',
  description: 'User Methods',
})
@ApiTags('APP Module')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}
    
    @UseGuards(JWTAuthGuard)    
    @Get(":id")
    async getUser(@Param("id") id){
        const data = await this.userService.getOne(id)
        return {data}
    }
    
    @UseGuards(JWTAuthGuard)    
    @Post()
    @ApiCreatedResponse({ description: 'User created' })
    async createUser(@Body() dto: CreateUserDto){
        const data = await this.userService.createOne(dto)    
        return {message: "User created", data}        
    }

}
