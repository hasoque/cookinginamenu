import { Component, OnInit, ElementRef } from '@angular/core';
import { UserModel } from 'src/app/app.component';
import * as faker from 'faker';


@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  id: number;
  name: string;
  reviewtext: string;
  rating: number;
  likes: number;
  date: Date;
  reviewer: UserModel;
  elementreference: ElementRef;

  constructor(e: ElementRef) {
    this.elementreference = e;
  }
  getElementReference() {
    return this.elementreference;
  }
  ngOnInit() {
    this.id = faker.random.number(200);
  }
}
