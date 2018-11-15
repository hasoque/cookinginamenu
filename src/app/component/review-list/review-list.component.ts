import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/model/editable-component';
import { ReviewsDataService } from 'src/app/service/review/reviews-data.service';
import { ReviewModel } from 'src/app/model/review-model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit, ModalComponent {

  data: any;
  reviewlist: Array<ReviewModel> = [];

  constructor(private reviewservice: ReviewsDataService) {

  }

  ngOnInit() {

  }

  getReviews(recipeid: number): Array<ReviewModel> {
    if (this.reviewlist.length === 0) {
      this.reviewlist = this.reviewservice.getReviewsFrom(recipeid, 5);
    }
    return this.reviewlist;
  }
}
