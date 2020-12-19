import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { get } from 'http';
import { JWTAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { JobsService } from './jobs.service';
import { ApiTags, ApiHeader, ApiCreatedResponse } from '@nestjs/swagger';

@ApiHeader({
  name: 'Jobs',
  description: 'Search Jobs Methods',
})
@ApiTags('APP Jobs Module')
@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService){}
    
    @Get()
    @ApiCreatedResponse({ description: 'All Jobs' })
    async getAllJobs(){
        const data = await this.jobsService.getAll([])
        return {
            message: "All Jobs",
            data
        }
    }
    @UseGuards(JWTAuthGuard)
    @Get(":id")
    @ApiCreatedResponse({ description: 'One Job' })
    async getOneJob(@Param("id") id: string ){
        const data =  await this.jobsService.getOne(id)
        return {
            message: "One Job",
            data
        }
    }
    

}
