import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rate-icon',
  templateUrl: './rate-icon.component.html',
  styleUrls: ['./rate-icon.component.css']
})
export class RateIconComponent {
  @Input() score: number;
  @Input() show: string; /**what to display on click to dialog - reviews
                          of recipe, recipes of user or dont display*/
  @Input() edit: boolean;
  @ViewChild('rateeditor') editor: ElementRef;
  visible: boolean;

  constructor() {
    this.visible = true;
  }

  counter(i: number) {
    return new Array(i);
  }

  clickedOnEdit() {
    this.visible = false;
    setTimeout(() => {
      this.editor.nativeElement.focus();
    }, 100);
  }
}
