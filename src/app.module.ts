import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UserFavoritesModule } from './user-favorites/user-favorites.module';
import { JobsModule } from './jobs/jobs.module';
import { TestDeployModule } from './test-deploy/test-deploy.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_DB, {
      poolSize: 3,
    }),
    AuthModule,
    UsersModule,
    UserFavoritesModule,
    JobsModule,
    TestDeployModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
