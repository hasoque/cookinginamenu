import { Component, OnInit, Input } from '@angular/core';
import { UserModel, AppComponent} from 'src/app/app.component';
import {ReviewItemComponent} from 'src/app/component/review-item/review-item.component';
import * as faker from 'faker';

export class Procedure {
  proc: string;
  constructor() {
    this.proc = faker.lorem.sentences(20);
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

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  name: string;
  imglink: string;
  taglist: Array<string>;
  ingredients: Array<Ingredient>;
  procedures: Array<Procedure>;
  reviewlist: Array<ReviewItemComponent>;
  uploader: UserModel;
  date: Date;
  description: string;

  constructor() { }
  ngOnInit() {
    this.name = faker.name.title();
    this.uploader = new UserModel();
    this.ingredients = [
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient(),
      new Ingredient()
    ];
    this.procedures = [
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure(),
      new Procedure()
    ];
  }
}
