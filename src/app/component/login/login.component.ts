import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user-model';
import { AccountService } from 'src/app/service/account/account.service';
import { ModalComponent } from 'src/app/model/editable-component';
import { DialogService } from 'src/app/service/dialog.service';
import { ModalButton } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, ModalComponent {

  username: string;
  password: string;
  message: string;
  data: any;
  constructor(private account: AccountService, private dialog: DialogService) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
    this.dialog.dialogModal.buttons = [new ModalButton('Login',
    () => {
      if (this.account.tryLogin(this.username, this.password)) {
        this.dialog.dialogModal.display(false);
      } else {
        this.message = 'Logging in Failed';
      }
    }, 'success'), new ModalButton('Cancel',
    () => {
      this.dialog.dialogModal.display(false);
    }, 'light')];
  }

  getUserModel() {
    const model = new UserModel();
    model.name = this.username;
    model.password = this.password;
    return model;
  }
}
