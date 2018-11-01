import { Injectable } from '@angular/core';
import { DialogModalComponent } from '../component/dialog-modal/dialog-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public dialogModal: DialogModalComponent;
  constructor() { }

  public setDialog(dialog: DialogModalComponent) {
    this.dialogModal = dialog;
  }
}
