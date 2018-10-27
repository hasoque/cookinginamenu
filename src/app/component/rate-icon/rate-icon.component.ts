import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rate-icon',
  templateUrl: './rate-icon.component.html',
  styleUrls: ['./rate-icon.component.css']
})
export class RateIconComponent implements OnInit {
  @Input() score: number;
  @Input() show: string; /**what to display on click to dialog - reviews
                          of recipe, recipes of user or dont display*/

  constructor() {
  }

  ngOnInit() {

  }
}
