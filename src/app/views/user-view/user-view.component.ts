import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { ReviewItemComponent } from 'src/app/component/review-item/review-item.component';

class TagRates {
  tagname: string;
  avgrate: number;
  totalrate: number;
  totalpost: number;
}
class VRecipe {
  id: number;
  name: string;
  description: string;
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
  }

  ngOnInit() {
  }

}
