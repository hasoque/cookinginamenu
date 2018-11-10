import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface IHash {
  [data: string]: any;
}
/**
 * @alias text
 * @field style
 * @method response asdas
 */
export class ModalButton {
  constructor(public text: string, public response: Function, public style?: string) {
    this.text = text;
    this.style = ((style === '' || style === undefined)  ? 'default' : style);
    this.response = response;
  }
}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent implements OnInit {

  public visible = false;
  public visibleAnimate = false;
  public buttons: Array<ModalButton>;
  /**
   *
   * "title" = display to title default is Loading,
   * "type" = display to body can be [edit, login, register, alert, confirmation].
   * "editview" = select component that implements EditableComponent only, register it inside edit-modal.ts
   * "modal-size" = modal-lg or null.
   */
  public data: IHash = {'title' : 'Loading',
                'type' : 'login',
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
    this.buttons = new Array<ModalButton>();

  }
}
