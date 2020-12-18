import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UserFavoritesModule } from './user-favorites/user-favorites.module';
import { JobsModule } from './jobs/jobs.module';
import { TestDeployModule } from './test-deploy/test-deploy.module';


@Module({
  imports: [UsersModule, MongooseModule.forRoot("mongodb://localhost/nest", {
    poolSize: 3
  }), AuthModule, UserFavoritesModule, JobsModule, TestDeployModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
