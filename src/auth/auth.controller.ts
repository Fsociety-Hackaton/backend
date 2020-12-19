import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from 'src/common/decorators';
import { AuthService } from './auth.service';

import { JWTAuthGuard } from './guards/jwtAuth.guard';
import { LocalAuthGuard } from './guards/localAuth.guard';

@Controller('auth')
export class AuthController {
    constructor(private  authService : AuthService){}
    
    @UseGuards(LocalAuthGuard) 
    @Post("login")
    async login(@User() user: any){   
        const data = await this.authService.login(user)        
        return {message:"Login succes"  , data} 
    }

    @UseGuards(JWTAuthGuard) 
    @ApiBearerAuth()
    @Get("profile")
    profile(
        @User() user
    ){
        return {
            message: "Get success",
            user
        }
    }

}
