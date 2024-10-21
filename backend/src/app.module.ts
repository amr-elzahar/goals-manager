import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoalsModule } from './goals/goals.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), GoalsModule],
})
export class AppModule {}
