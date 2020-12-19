import { Schema } from 'mongoose';

export const UserFavoriteSchema = new Schema({
  name: {type: String, required: true},
  jobId: {type: String, required: true},
  date: {type: String, required: true},
  portal: {type: String, required: true} 
});
