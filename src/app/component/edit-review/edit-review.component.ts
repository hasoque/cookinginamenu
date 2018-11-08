import { Component, OnInit, Input } from '@angular/core';
import { EditableComponent } from 'src/app/model/editable-component';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.scss']
})
export class EditReviewComponent implements OnInit, EditableComponent {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
