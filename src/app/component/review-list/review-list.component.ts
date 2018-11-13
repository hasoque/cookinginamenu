import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/model/editable-component';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit, ModalComponent {

  data: any;
  constructor() { }

  ngOnInit() {
  }

}
