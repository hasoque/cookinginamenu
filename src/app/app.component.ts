import { Component, OnInit } from '@angular/core';

export interface UserModel {
  name: string;
  id: number;
  totalrating: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ciamclient';
  user: UserModel = {name: 'ja', id: 0, totalrating: 0};

  loggedin() {
    return true;
  }
  ngOnInit() {
    this.user.id = 0;
  }
}
