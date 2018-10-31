import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from './model/user-model';
import { DialogModalComponent } from './component/dialog-modal/dialog-modal.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ciamclient';
  @ViewChild('dialog') modal: DialogModalComponent;
  user: UserModel;
  constructor(private route: ActivatedRoute, private router: Router) {

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

  openModal() {
    this.router.navigate([], {
      queryParams: {
        newOrdNum: '123'
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // do not trigger navigation
    });
    console.log(this.router);
  }
  openModal2() {
    this.router.navigate([], {
      queryParams: {
        oldnum: '123'
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // do not trigger navigation
    });
    console.log(this.router);
  }

  ngOnInit() {

  }

  public onModalClicked(event: MouseEvent): void {
    this.modal.onContainerClicked(event);
  }
}
