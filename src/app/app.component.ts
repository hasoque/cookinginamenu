import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from './model/user-model';
import { DialogModalComponent } from './component/dialog-modal/dialog-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ciamclient';
  @ViewChild('dialog') modal: DialogModalComponent;
  user: UserModel;
  constructor() {

  }

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
    this.modal.onContainerClicked(event);
  }
}
