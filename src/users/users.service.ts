import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto';
import { Users } from './interfaces/users.interface';
 
@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private readonly  Users: Model<Users>){}

    async getMany () {
        const user = await this.Users.find()
        return user
    } 
    
    async getOne (id) { 
        const user = await this.Users.findOne({_id: id})
        console.log(id);
        
        if(!user) throw new NotFoundException("Dont exist")
        return {
            id: user.id,
            name : user.name,
            lastName: user.lasteName,
            email: user.email,
        }         
    }

    async createOne (dto: CreateUserDto) {
        const {name, lasteName, email, password} = dto 
        const hashPasword = await hash(password, 10);
        
        const userEncrypt = {
            name, 
            lasteName, 
            email, 
            password: hashPasword
        }
        const newUser = await this.Users.create(userEncrypt) 
            
        return {
            id: newUser.id,
            name: newUser.name,
            lasteName: newUser.lasteName,
            email: newUser.email,
        }
    }

    async deleteOne (id) {
        const userDeleted = await this.Users.deleteOne()
        return userDeleted 
    }
    // AUTH
    async findByEmail(email: string){
        return await this.Users.findOne({email: email})
    }
}
