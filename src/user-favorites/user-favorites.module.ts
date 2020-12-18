import { Module } from '@nestjs/common';
import { UserFavoritesService } from './user-favorites.service';
import { UserFavoritesController } from './user-favorites.controller';

@Module({
  providers: [UserFavoritesService],
  controllers: [UserFavoritesController]
})
export class UserFavoritesModule {}
