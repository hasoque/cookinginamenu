import * as faker from 'faker';
import { RecipeModel } from './recipe-model';
import { ReviewModel } from './review-model';

export class TagRates {
  tagname: string;
  avgrate: number;
  totalrate: number;
  totalpost: number;
  constructor() {
    this.tagname = faker.random.word();
    this.avgrate = faker.random.number(5);
    this.totalrate = faker.random.number(100);
    this.totalpost = faker.random.number(1000);
  }
}

export class ReviewedRecipe {
  recipe: RecipeModel;
  uploader: UserModel;
  review: ReviewModel;

  constructor() {
    this.recipe = new RecipeModel();
    this.uploader = new UserModel();
    this.review = new ReviewModel();
  }
}
export class UserModel {
  name: string;
  fname: string;
  lname: string;
  id: number;
  bio: string;
  reviewkarma: number;
  avgrating: number;
  password: string;
  followerCount: number;
  dateJoined: Date;
  email: string;

  constructor(id?: number) {
    if (id !== undefined) {
      this.id = id;
    } else {
      this.id = faker.random.number(100);
    }
    faker.seed(id);
    this.bio = faker.lorem.paragraph(5 + faker.random.number(5));
    this.reviewkarma = faker.random.number(1000) + 10;
    this.avgrating = faker.random.number(5);
    this.followerCount = faker.random.number(10000000) + 5000;
    this.fname = faker.name.firstName();
    this.lname = faker.name.lastName();
    this.name = this.fname.slice(faker.random.number(this.fname.length / 2), this.fname.length) + faker.lorem.word();
    this.dateJoined = faker.date.recent(100);
    this.email = this.email;
  }
}
