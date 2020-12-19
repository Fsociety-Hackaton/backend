import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { get } from 'http';
import { JWTAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService){}
    
    @UseGuards(JWTAuthGuard)
    @Get()
    async getAllJobs(){
        const data = await this.jobsService.getAll([])
        return {
            message: "All Jobs",
            data
        }
    }
    @UseGuards(JWTAuthGuard)
    @Get(":id")
    async getOneJob(@Param("id") id: string ){
        const data =  await this.jobsService.getOne(id)
        return {
            message: "One Job",
            data
        }
    }
    

}
