import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/model/editable-component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, ModalComponent {

  data: any;
  constructor() { }

  ngOnInit() {
  }

}
