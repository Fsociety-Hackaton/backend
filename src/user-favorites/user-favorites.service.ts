import { Injectable } from '@nestjs/common';
import { CreateUserFavoritesDto, EditUserFavoritesDto } from './dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';  
import { UserFavorite } from './interfaces/user-favorites.interfaces';

@Injectable()
export class UserFavoritesService {

    //constructor(@InjectModel('userFavorites') readonly userFavoriteModel: Model<UserFavorite>) {}

    async getMany() {
        //const favorites = await this.userFavoriteModel.find()
        return {message: 'ok'};
    }
    getOne(id: string) {
        return { ok: 'getOne' }
    }
    addOne(dto: CreateUserFavoritesDto) {
        return { ok: 'addOne' }
    }
    /*editOne(id: string, dto: EditUserFavoritesDto) {
        return { ok: 'editOne' }
    }*/
    deleteOne(id: string) {
        return { ok: 'deleteOne' }
    }
}
