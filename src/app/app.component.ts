import { Component, OnInit } from '@angular/core';

interface UserModel {
  name: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ciamclient';
  user: UserModel = {name: 'ja', id: 0};

  loggedin() {
    return true;
  }
  ngOnInit() {
    this.user.id = 0;
  }
}