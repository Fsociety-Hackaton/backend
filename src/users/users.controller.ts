import { Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service'
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Get(":id")
    getUser(@Param("id") id: string){
        this.userService.getOne(id)
    }
    
    @Post()
    createUser(){
        
    }
    
    @Delete()
    deleteUser(){
        
    }

}
