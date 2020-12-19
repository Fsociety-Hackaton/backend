import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Jobs } from './interface/jobs.iterface';

@Injectable()
export class JobsService {
    constructor(@InjectModel("jobs") private readonly Jobs: Model<Jobs> ){}
    async getAll(filters: []){
        
        return await this.Jobs.find()
    }
    async getOne(id: string){
        return await this.Jobs.findOne({_id: id})
    }
}
