import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/app.component';


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
  constructor() { }

  ngOnInit() {

  }

}
