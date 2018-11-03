import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserModel } from './model/user-model';
import { DialogModalComponent } from './component/dialog-modal/dialog-modal.component';
import { DialogService } from './service/dialog.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ciamclient';
  @ViewChild('dialog') modal: DialogModalComponent;
  user: UserModel;
  constructor(private dservice: DialogService) {
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

  ngAfterViewInit() {
    this.dservice.setDialog(this.modal);
  }

  ngOnInit() {

  }

  public onModalClicked(event: MouseEvent): void {
    this.modal.onContainerClicked(event);
  }
}
