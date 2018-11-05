import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface IHash {
  [data: string]: any;
}
@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent implements OnInit {

  public visible = false;
  public visibleAnimate = false;
  public data: IHash = {'title' : 'Loading',
                'type' : 'login',
                'body': '<app-login></app-login>',
                'modal-size': ''
                };

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
