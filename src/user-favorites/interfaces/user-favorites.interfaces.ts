import { Document } from 'mongoose'

export interface UserFavorite extends Document {
    name: string; 
    user_id: string    
    jobId: string;
    date: string;
    portal: string;
}