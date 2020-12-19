import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersService } from './users.service'
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}
    
    @Get(":id")
    async getUser(@Param("id") id){
        const data = await this.userService.getOne(id)
        return {data}
    }

    @Post()
    async createUser(@Body() dto: CreateUserDto){
        const data = await this.userService.createOne(dto)    
        return {message: "User created", data}        
    }
    
    @Delete()
    deleteUser(){
        
    }

}
