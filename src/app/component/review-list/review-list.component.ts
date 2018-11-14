import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/model/editable-component';
import { UserModel } from 'src/app/model/user-model';

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
  getReviewer(id: number) {
    return new UserModel(id);
  }

}
