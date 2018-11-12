import { UserModel } from './user-model';
import { ReviewModel } from './review-model';
import * as faker from 'faker';

export class Procedure {
  text: string;
  constructor() {
    this.text = faker.lorem.sentences(10);
  }
}

export class Ingredient {
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
  uploaderid: number;
  date: Date;
  description: string;

  constructor(id?: number) {
    if (id !== undefined) {
      this.id = id;
    } else {
      this.id = faker.random.number(100);
    }
    faker.seed(this.id);
    this.uploaderid = faker.random.number(100);
    this.name = faker.lorem.words(3);
    this.trating = faker.random.number(234);
    this.avgrating = (faker.random.number(30) + 1) / 10 + 2;
    this.description = faker.lorem.paragraph(15 + faker.random.number(5));
    this.date = faker.date.recent(100);
    this.taglist = faker.random.words(5 + faker.random.number(5)).split(' ');
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
  }

}
