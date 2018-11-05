import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserModel } from './model/user-model';
import { DialogModalComponent } from './component/dialog-modal/dialog-modal.component';
import { DialogService } from './service/dialog.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ciamclient';
  @ViewChild('dialog') modal: DialogModalComponent;
  user: UserModel;
  constructor(private dservice: DialogService, private _router: Router) {
  }

  loggedin() {
    return this.user === null;
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
    this._router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    this._router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
            this._router.navigated = false;
            window.scrollTo(0, 0);
        }
    });
  }

  public onModalClicked(event: MouseEvent): void {
    this.modal.onContainerClicked(event);
  }
}
