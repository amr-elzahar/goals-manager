import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goal } from './goal.schema';

@Injectable()
export class GoalsService {
  constructor(@InjectModel(Goal.name) private goalModel: Model<Goal>) {}

  async createGoal(title: string): Promise<Goal> {
    const newGoal = new this.goalModel({ title });
    return newGoal.save();
  }

  async getGoals(): Promise<Goal[]> {
    return this.goalModel.find().exec();
  }

  async deleteAllGoals(): Promise<{ deletedCount: number }> {
    return this.goalModel.deleteMany({}).exec();
  }
}
