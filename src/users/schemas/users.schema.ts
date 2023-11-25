/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { HydratedDocument } from "mongoose";
import { ObjectId } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;
  @Prop()
  userName: string;

  @Prop()
  identifyCard: string;

  @Prop()
  birthDate: string;

  @Prop()
  phoneNumber: string;

  @Prop({ unique: [true, "Duplicate email"] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  avatarUrl: string;

   @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

