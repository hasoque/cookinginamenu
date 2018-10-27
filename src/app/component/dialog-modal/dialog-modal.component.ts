import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {

  @Input() bodycontent: string;

  public visible = false;
  public visibleAnimate = false;

  public display(visible: boolean) {
    console.log(visible);
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
