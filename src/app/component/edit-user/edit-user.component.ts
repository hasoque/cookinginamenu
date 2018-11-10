import { Component, OnInit, Input } from '@angular/core';
import { EditableComponent } from 'src/app/model/editable-component';
import { DialogService } from 'src/app/service/dialog.service';
import { ModalButton } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, EditableComponent {

  @Input() data: any;
  constructor(private dialog: DialogService) { }

  ngOnInit() {
    this.dialog.dialogModal.buttons.length = 0;
    this.dialog.dialogModal.buttons.push(new ModalButton('Save', () => {
      this.dialog.dialogModal.display(false);
    }, 'success'));
    this.dialog.dialogModal.buttons.push(new ModalButton('Cancel', () => {
      this.dialog.dialogModal.display(false);
    }, 'success'));
  }

}
