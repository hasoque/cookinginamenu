import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor() {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }
  getUserModel() {
    const model = new UserModel();
    model.name = this.username;
    model.password = this.password;
    return model;

  }

}
