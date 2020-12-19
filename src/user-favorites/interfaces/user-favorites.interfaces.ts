import { Document } from 'mongoose'

export interface UserFavorite extends Document {
    name: string; 
    jobId: string;
    date: string;
    portal: string;
}