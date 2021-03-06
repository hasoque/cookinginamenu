import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/model/editable-component';
import { ReviewsDataService } from 'src/app/service/review/reviews-data.service';
import { ReviewModel } from 'src/app/model/review-model';
import { DialogService } from 'src/app/service/dialog.service';
import { ModalButton } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit, ModalComponent {

  data: any;
  reviewlist: Array<ReviewModel> = [];

  constructor(private reviewservice: ReviewsDataService, private dialog: DialogService) {

  }

  ngOnInit() {
    this.dialog.dialogModal.buttons = [new ModalButton('Close', () => {
      this.dialog.dialogModal.display(false);
    }, 'light')];
  }

  loadReviews() {
    this.reviewlist = this.reviewlist.concat(this.reviewservice.getReviewsFrom(this.data.recipeid, this.reviewlist.length / 5));
  }

  getReviews(): Array<ReviewModel> {
    if (this.reviewlist.length === 0) {
      this.reviewlist = this.reviewservice.getReviewsFrom(this.data, 0);
    }
    return this.reviewlist;
  }
}
