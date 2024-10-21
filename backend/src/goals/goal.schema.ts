import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Goal extends Document {
  @Prop({ required: true })
  title: string;
}

export const GoalSchema = SchemaFactory.createForClass(Goal);
