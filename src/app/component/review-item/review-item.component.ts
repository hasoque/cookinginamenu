import { Component, OnInit, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ReviewModel } from 'src/app/model/review-model';
import { UserModel } from 'src/app/model/user-model';


@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit, AfterViewInit {

  @Input() data: ReviewModel;
  reviewer: UserModel;
  constructor() {
    this.reviewer = new UserModel();
  }
  getElementReference() {

  }
  ngAfterViewInit() {
  }
  ngOnInit() {
  }
}
