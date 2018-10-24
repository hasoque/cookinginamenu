import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { ReviewItemComponent } from 'src/app/component/review-item/review-item.component';

class TagRates {
  tagname: string;
  avgrate: number;
  totalrate: number;
  totalpost: number;
  constructor() {
    this.tagname = faker.lorem.word();
    this.avgrate = faker.random.number(5);
    this.totalrate = faker.random.number(100);
    this.totalpost = faker.random.number(1000);
  }
}
class VRecipe {
  id: number;
  name: string;
  description: string;

  constructor() {
    this.id = faker.random.number(10);
    this.name = faker.name.title();
    this.description = faker.lorem.sentences(5);
  }
}
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  id: number;
  name: string;
  bio: string;
  totalrating: number;
  avgrating: number;
  topreviews: Array<ReviewItemComponent>;
  toprecipes: Array<VRecipe>;
  contributionstag: Array<TagRates>;
  datejoined: Date;

  constructor() {
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    this.bio = faker.lorem.paragraphs(5, '\n');
    this.avgrating = faker.random.number(20) / 10 + 3;
    this.totalrating = faker.random.number(1000) + 1000;
    this.datejoined = faker.date.recent(23);
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
      new TagRates()
    ];
  }

  ngOnInit() {
  }

}
