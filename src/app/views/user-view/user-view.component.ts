import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { ReviewItemComponent } from 'src/app/component/review-item/review-item.component';
import { UserModel } from 'src/app/model/user-model';

class TagRates {
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
class VRecipe {
  id: number;
  name: string;
  description: string;
  user: UserModel;

  constructor() {
    this.id = faker.random.number(10);
    this.name = faker.name.title();
    this.description = faker.lorem.sentences(5);
    this.user = new UserModel();
  }
}
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  info: UserModel;
  topreviews: Array<ReviewItemComponent>;
  toprecipes: Array<VRecipe>;
  contributionstag: Array<TagRates>;
  datejoined: Date;

  constructor() {
  }

  ngOnInit() {
    this.info = new UserModel();
    this.datejoined = faker.date.recent(23);
    this.topreviews = [

    ];
    this.toprecipes = [
      new VRecipe(),
      new VRecipe(),
      new VRecipe(),
      new VRecipe(),
      new VRecipe(),
    ];
    this.contributionstag = [
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
    ];
  }

}
