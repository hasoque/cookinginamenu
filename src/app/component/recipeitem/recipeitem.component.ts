import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

  @Input() data: RecipeModel;
  constructor() {

  }

  ngOnInit() {

  }
}
