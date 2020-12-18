import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTestDeployDto } from './dto/test-deploy.dto';

//Database querys
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TestDeploy } from './interfaces/test-deploy.interface';

@Controller('test-deploy')
export class TestDeployController {
  constructor(
    @InjectModel('TestDeploy') private readonly TestDeploy: Model<TestDeploy>,
     ) {}
  @Get()
  async find() {
    const response = await this.TestDeploy.find();
    return response;
  }
  @Post()
  async create(@Body() createTestDeployDto: CreateTestDeployDto) {
    const response = await this.TestDeploy.create(createTestDeployDto);

    return response;
  }
}
