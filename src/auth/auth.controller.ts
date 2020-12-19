import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators';
import { AuthService } from './auth.service';

import { JWTAuthGuard } from './guards/jwtAuth.guard';
import { LocalAuthGuard } from './guards/localAuth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}
    @UseGuards(LocalAuthGuard, JWTAuthGuard) 
    @Post("login")
    async login(@User() user: any){
        
        const data = await this.authService.createToken(user)
        return data 
    }

    @Get("profile")
    profile(){
        return "ESTOS SON TUS DATOS"
    }
}
