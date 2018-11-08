import { Component, OnInit, Input } from '@angular/core';
import { EditableComponent } from 'src/app/model/editable-component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, EditableComponent {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
