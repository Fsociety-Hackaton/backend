import { Module } from '@nestjs/common';
import { TestDeployController } from './test-deploy.controller';

@Module({
  controllers: [TestDeployController]
})
export class TestDeployModule {}
