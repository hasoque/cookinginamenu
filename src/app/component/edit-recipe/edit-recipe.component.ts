import { Component, OnInit, Input } from '@angular/core';
import { EditableComponent } from 'src/app/model/editable-component';
import { RecipeComponent } from 'src/app/views/recipe/recipe.component';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit, EditableComponent {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

  addTag() {

  }

  addIngredient() {

  }

  addProcedure() {

  }
}
