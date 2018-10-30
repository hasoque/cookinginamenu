import { UserModel } from './user-model';
import { RecipeModel } from './recipe-model';
import * as faker from 'faker';

export class ReviewModel {
  reviewtext: string;
  rate: number;
  likes: number;
  date: Date;
  reviewer: UserModel;
  reviewed: RecipeModel;

  constructor() {
    this.reviewtext = faker.lorem.paragraph(3);
    this.rate = faker.random.number(5);
    this.likes = faker.random.number(1000) + 500;
    this.date = faker.date.recent(20);
    this.reviewer = new UserModel();
    this.reviewed = new RecipeModel(0, false);
  }
}
