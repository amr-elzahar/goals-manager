import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { GoalsService } from './goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  async createGoal(@Body('title') title: string) {
    return this.goalsService.createGoal(title);
  }

  @Get()
  async getAllGoals() {
    return this.goalsService.getGoals();
  }

  @Delete()
  async removeAllGoals() {
    return this.goalsService.deleteAllGoals();
  }
}
