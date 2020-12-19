import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JWTAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { CreateUserDto } from './dto';
import { UsersService } from './users.service'
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
    async createUser(@Body() dto: CreateUserDto){
        const data = await this.userService.createOne(dto)    
        return {message: "User created", data}        
    }

}
