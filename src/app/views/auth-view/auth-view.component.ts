import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  logintab: boolean;
  constructor() {
    this.logintab = true;
  }

  ngOnInit() {
  }

  public toLogin(login: boolean) {
    this.logintab = login;
  }
}
