import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface IHash {
  [data: string]: any;
}
@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css'],
})
export class DialogModalComponent implements OnInit {

  private visible = false;
  private visibleAnimate = false;
  data: IHash = {};

  public display(visible: boolean) {
    this.visible = visible;
    setTimeout(() => this.visibleAnimate = visible, 150);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.display(false);
    }
  }



  ngOnInit() {

  }
}
