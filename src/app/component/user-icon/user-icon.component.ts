import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/model/user-model';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent implements OnInit {

  @Input() data: number;
  user: UserModel;
  show: boolean;

  constructor(private uservice: UserService) { }

  ngOnInit() {
    if (this.user === undefined) {
      this.user = this.uservice.getIconizedUser(this.data);
    }
  }

  onHover(show: boolean) {
    if (this.user.fname === undefined) {
     this.uservice.fillUserSimple(this.user);
    }
    this.show = show;
  }

}
