import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/model/user-model';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent implements OnInit {

  @Input() data: UserModel;
  show: boolean;

  constructor() { }

  ngOnInit() {
  }

}
