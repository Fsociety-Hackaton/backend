import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserFavorite } from './interfaces/user-favorites.interfaces';

@Injectable()
export class UserFavoritesService {

    constructor(@InjectModel('UserFavorite') readonly userFavoriteModel: Model<UserFavorite>) {}

    async getMany() {
        const favorites = await this.userFavoriteModel.find()
        return favorites
    }
    getOne(id) {
        return { ok: 'getOne' }
    }
    addOne(dto) {
        return { ok: 'addOne' }
    }

    deleteOne(id: string) {
        return { ok: 'deleteOne' }
    }
}
