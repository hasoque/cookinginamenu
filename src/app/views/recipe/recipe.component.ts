import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  data: RecipeModel;
  similar: Array<RecipeModel>;
  recommended: Array<RecipeModel>;
  constructor() {
   this.data = new RecipeModel();
   this.similar = [
     new RecipeModel(),
     new RecipeModel(),
     new RecipeModel(),
     new RecipeModel(),
     new RecipeModel()
   ];
   this.recommended = [
     new RecipeModel(),
     new RecipeModel(),
     new RecipeModel(),
     new RecipeModel(),
     new RecipeModel()
   ];
  }
  ngOnInit() {

  }
}
