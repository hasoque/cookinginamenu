import { Component, OnInit, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ReviewModel } from 'src/app/model/review-model';
import { UserModel } from 'src/app/model/user-model';
import { UserService } from 'src/app/service/user/user.service';
import { ReviewsDataService } from 'src/app/service/review/reviews-data.service';


@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit, AfterViewInit {

  @Input() data: ReviewModel;
  reviewer: UserModel;
  constructor(private uservice: UserService,
    private reviewservice: ReviewsDataService) {
  }
  getElementReference() {

  }
  ngAfterViewInit() {
  }
  ngOnInit() {
    this.reviewer = this.uservice.getUser(this.data.id);
  }
  upvote() {
    this.reviewservice.upvote(this.data.id, this.reviewer.id);
  }

  downvote() {
    this.reviewservice.downvote(this.data.id, this.reviewer.id);

  }
}
