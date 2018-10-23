import { Component, OnInit } from '@angular/core';

export class UserModel {
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
  showModal = '';
  user: UserModel;

  loggedin() {
    return this.user === null;
  }

  ngOnInit() {

  }

  public onModalClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.showModal = '';
    }
  }
}
