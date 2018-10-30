import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-rate-icon',
  templateUrl: './rate-icon.component.html',
  styleUrls: ['./rate-icon.component.css']
})
export class RateIconComponent {
  @Input() score: number;
  @Input() dialog: DialogModalComponent;

  constructor() {

  }

  counter(i: number) {
    return new Array(i);
  }

}
