import { UserModel } from './user-model';
import { RecipeModel } from './recipe-model';

export class ReviewModel {
  id: number;
  name: string;
  reviewtext: string;
  rate: number;
  likes: number;
  date: Date;
  reviewer: UserModel;
  reviewed: RecipeModel;

  constructor() {
  }
}
