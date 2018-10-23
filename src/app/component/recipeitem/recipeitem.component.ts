import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../app.component';
import * as faker from 'faker';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

  name: string;
  description: string;
  trating: number;
  avgrating: number;
  id: number;
  user: UserModel;
  constructor() {

  }
  ngOnInit() {
    this.name = faker.lorem.words(3);
    this.id = faker.random.number(100);
    this.trating = faker.random.number(234);
    this.avgrating = faker.random.number(3) + 2;
    this.description = faker.lorem.sentence(12, faker.random.number(5) + 15);
    this.user = new UserModel();
    this.user.name = faker.name.firstName(faker.random.number(2)) + ' ' + faker.name.lastName(1);
    this.user.id = faker.random.number(100);
  }
  counter(i: number) {
    return new Array(i);
  }
}
