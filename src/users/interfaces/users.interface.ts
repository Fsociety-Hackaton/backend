import { Document } from 'mongoose';

export interface Users extends Document {
  name: String;
  lasteName: String;
  email: String;
  password: String
}
