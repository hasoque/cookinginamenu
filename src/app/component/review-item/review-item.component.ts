import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ReviewModel } from 'src/app/model/review-model';


@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  @Input() data: ReviewModel;
  constructor() {

  }
  getElementReference() {

  }
  ngOnInit() {
  }
}
