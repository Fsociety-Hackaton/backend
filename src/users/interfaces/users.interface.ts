import { Document } from 'mongoose';

export interface Users extends Document {
  name: string;
  lasteName: string;
  email: string;
}
