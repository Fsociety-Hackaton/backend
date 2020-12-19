import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserFavorite } from './interfaces/user-favorites.interfaces';
import { CreateUserFavoritesDto } from './dto/create-user-favorites.dto'

@Injectable()
export class UserFavoritesService {

    constructor(@InjectModel('UserFavorite') readonly userFavoriteModel: Model<UserFavorite>) {}

    async getMany() {
        const favorites = await this.userFavoriteModel.find()
        return favorites
    }
    async getOne(id) {
        const favorite = await this.userFavoriteModel.findOne({_id: id})

        if(!favorite) throw new NotFoundException("Dont exist")
        return {
            name: favorite.name,
            jobId : favorite.jobId,
            date: favorite.date,
            portal: favorite.portal
        }
    }
    async addOne(dto: CreateUserFavoritesDto) {
        const {name, jobId, date, portal} = dto

        const favorite = await this.userFavoriteModel.create({name, jobId, date, portal})

        return {
            name: favorite.name,
            jobId : favorite.jobId,
            date: favorite.date,
            portal: favorite.portal
        }
    }

    async deleteOne(id) {
        const userFavoriteDel = await this.userFavoriteModel.deleteOne()
        return userFavoriteDel 
    }
}
