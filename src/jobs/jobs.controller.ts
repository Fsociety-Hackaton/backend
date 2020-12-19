import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService){}
    @Get()
    async getAllJobs(){
        const data = await this.jobsService.getAll([])
        return {
            message: "All Jobs",
            data
        }
    }
    @Get(":id")
    async getOneJob(@Param("id") id: string ){
        const data =  await this.jobsService.getOne(id)
        return {
            message: "One Job",
            data
        }
    }
    

}
