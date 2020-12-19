import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiHeader, ApiCreatedResponse } from '@nestjs/swagger';
import { User } from 'src/common/decorators';
import { AuthService } from './auth.service';

import { JWTAuthGuard } from './guards/jwtAuth.guard';
import { LocalAuthGuard } from './guards/localAuth.guard';

@ApiHeader({
  name: 'Login',
  description: 'User Login Methods',
})
@ApiTags('APP Login Module')
@Controller('auth')
export class AuthController {
    constructor(private  authService : AuthService){}
    
    @UseGuards(LocalAuthGuard) 
    @Post("login")
    @ApiCreatedResponse({ description: 'Login success' })
    async login(@User() user: any){   
        const data = await this.authService.login(user)        
        return {message:"Login success"  , data} 
    }

    @UseGuards(JWTAuthGuard) 
    @ApiBearerAuth()
    @Get("profile")
    @ApiCreatedResponse({ description: 'Get success' })
    profile(
        @User() user
    ){
        return {
            message: "Get success",
            user
        }
    }

}
