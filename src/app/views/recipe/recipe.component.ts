import { Component, OnInit } from '@angular/core';

interface ReviewObj {
  reviewerid: number;
  reviewername: string;
  reviewdesc: string;
  reviewrating: number;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
