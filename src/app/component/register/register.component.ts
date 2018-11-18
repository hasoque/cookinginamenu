import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/model/editable-component';
import { AccountService } from 'src/app/service/account/account.service';
import { ModalButton } from '../dialog-modal/dialog-modal.component';
import { DialogService } from 'src/app/service/dialog.service';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, ModalComponent {

  data: any;
  username: string;
  password: string;
  email: string;
  confirmpass: string;
  message: string;

  constructor(private uservice: UserService, private account: AccountService,
    private dialog: DialogService, private router: Router) {
    this.username = '';
    this.password = '';
    this.email = '';
    this.confirmpass = '';
  }

  ngOnInit() {
    this.dialog.dialogModal.buttons = [new ModalButton('Register',
    () => {
      if (this.uservice.putUser(this.getModel())) {
        if (this.account.tryLogin(this.username, this.password)) {
          this.dialog.dialogModal.display(false);
          this.router.navigate(['/user/' + this.account.getUserLoggedIn().id]);
        } else {
          this.message = 'Register in Failed';
        }
      }
    }, 'success'), new ModalButton('Cancel',
    () => {
      this.dialog.dialogModal.display(false);
    }, 'light')];
  }

  getModel() {
    const model = new UserModel();
    model.name = this.username;
    model.password = this.password;
    model.email = this.email;
    return model;
  }
}
