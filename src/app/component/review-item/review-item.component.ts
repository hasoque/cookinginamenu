import { Component, OnInit, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ReviewModel } from 'src/app/model/review-model';
import { RecipeModel } from 'src/app/model/recipe-model';


@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit, AfterViewInit {

  @Input() data: ReviewModel;
  constructor() {
  }
  getElementReference() {

  }
  ngAfterViewInit() {
  }
  ngOnInit() {
  }
}
