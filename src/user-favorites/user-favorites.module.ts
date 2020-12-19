import { Module } from '@nestjs/common';
import { UserFavoritesService } from './user-favorites.service';
import { UserFavoritesController } from './user-favorites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFavoriteSchema } from './schema/user-favorites.shema';
@Module({
  imports: [MongooseModule.forFeature([
    {name: 'UserFavorite', schema: UserFavoriteSchema}
  ])],
  providers: [UserFavoritesService],
  controllers: [UserFavoritesController]
})
export class UserFavoritesModule {}
