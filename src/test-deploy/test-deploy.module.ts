import { Module } from '@nestjs/common';
import { TestDeployController } from './test-deploy.controller';
import { TestDeploySchema } from "./schema/test-deploy.schema";
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[
    MongooseModule.forFeature([
      { name: "TestDeploy", schema: TestDeploySchema}
    ])
  ],
  controllers: [TestDeployController]
})
export class TestDeployModule {}
