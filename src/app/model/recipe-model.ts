import { UserModel } from './user-model';
import { ReviewModel } from './review-model';
import * as faker from 'faker';

class Procedure {
  proc: string;
  constructor() {
    this.proc = faker.lorem.sentences(10);
  }
}

class Ingredient {
  name: string;
  quantity: string;
  constructor() {
    this.name = faker.lorem.words(2);
    this.quantity = faker.random.number(20) + 'x ';
  }
}
export class RecipeModel {
  id: number;
  trating: number;
  avgrating: number;
  name: string;
  imglink: string;
  taglist: Array<string>;
  ingredients: Array<Ingredient>;
  procedures: Array<Procedure>;
  reviewlist: Array<ReviewModel>;
  uploader: UserModel;
  date: Date;
  description: string;

  constructor(id?: number, reviewed?: boolean) {
    if (id !== null) {
      this.id = faker.random.number(100);
    }
    this.name = faker.lorem.words(3);
    this.trating = faker.random.number(234);
    this.avgrating = (faker.random.number(30) + 1) / 10 + 2;
    this.description = faker.lorem.sentence(12, faker.random.number(5) + 15);
    this.uploader = new UserModel();
    this.date = faker.date.recent(100);
    this.ingredients = [new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient()];
    this.procedures = [new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure()];
    if (reviewed) {
      this.reviewlist = [new ReviewModel(),
        new ReviewModel(),
        new ReviewModel(),
        new ReviewModel(),
        new ReviewModel(),
        new ReviewModel()
      ];
    }
  }
}
