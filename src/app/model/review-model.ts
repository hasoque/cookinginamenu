import { UserModel } from './user-model';
import { RecipeModel } from './recipe-model';
import * as faker from 'faker';

export class ReviewModel {

  id: number;
  reviewerid: number;
  reviewedid: number;
  reviewtext: string;
  rate: number;
  likes: number;
  date: Date;

  constructor(id?: number) {
    if (id === undefined) {
      id = faker.random.number(100);
    } else {
      this.id = id;
      faker.seed(id);
    }
    this.reviewtext = faker.lorem.paragraph(3);
    this.reviewerid = faker.random.number(100);
    this.rate = faker.random.number(5);
    this.likes = faker.random.number(1000) + 500;
    this.date = faker.date.recent(20);
  }
}
