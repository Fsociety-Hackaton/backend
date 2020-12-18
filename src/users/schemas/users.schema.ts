import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type "" = "" & Document;

@Schema()
export class Users {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  email: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users)