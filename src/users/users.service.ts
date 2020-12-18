import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto';
import { Users } from './interfaces/users.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private  Users: Model<Users>){}

    async getMany () {
        this.Users.find()
    } 
    
    async getOne (id) { 
        const user = this.Users.findOne(id)
        if(!user) throw new NotFoundException("Dont exists"
        return user        
    }

    async createOne (dto: CreateUserDto) {
        const newUser = new this.Users(dto)
        
        return await newUser.save() 
    }

    async deleteOne () {
    
    }
}
