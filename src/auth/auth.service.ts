import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compare } from "bcryptjs"
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ){}
    async validateUser(email: string, password: string): Promise<any> {
        const user = await  this.userService.findByEmail(email)
        
        const comparePassword = await  compare(password, user.password) 
        if(user && comparePassword ){
            
            return {
                _id: user.id,
                name: user.name ,
                lasteName: user.lasteName,
                email: user.email,
            }
        }
        return null  
    }
    async createToken (user){
        console.log(user);
        
        const { id, ...rest} = user
        const payload = { sub:id};
        return {
            ...rest,
            accessToken: this.jwtService.sign(payload)
        }
    }
}
