import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from 'src/app/model/editable-component';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.scss']
})
export class EditReviewComponent implements OnInit, ModalComponent {

  @Input() data: any;
  rating = 1;
  constructor() { }

  ngOnInit() {

  }

  onRate(amount: number) {
    this.rating = amount;
  }

  counter(i: number) {
    return new Array(i);
  }

}
