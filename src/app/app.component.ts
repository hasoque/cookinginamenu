import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { UserModel } from './model/user-model';

const counter = function(i: number) {
  return new Array(i);
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ciamclient';
  showModal = '';
  user: UserModel;

  loggedin() {
    return this.user === null;
  }

  setUser(user: UserModel) {
    this.user = user;
  }
  removeUser() {
    this.user = null;
  }

  ngOnInit() {

  }

  public onModalClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.showModal = '';
    }
  }
}
