import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserModel } from './model/user-model';
import { DialogModalComponent, ModalButton } from './component/dialog-modal/dialog-modal.component';
import { DialogService } from './service/dialog.service';
import { Router } from '@angular/router';
import { AccountService } from './service/account/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ciamclient';
  @ViewChild('dialog') modal: DialogModalComponent;
  constructor(private dservice: DialogService, private _router: Router,
     private account: AccountService) {
  }

  loggedin() {
    return this.account.isLoggedIn();
  }

  onBtnLogin() {
    this.modal.data['title'] = 'Login';
    this.modal.data['modal-size'] = '';
    this.modal.data['type'] = 'login';
    this.modal.display(true);
  }

  onBtnRegister() {
    this.modal.data['title'] = 'Register';
    this.modal.data['modal-size'] = '';
    this.modal.data['type'] = 'register';
    this.modal.display(true);
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
