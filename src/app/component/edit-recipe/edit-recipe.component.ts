import { Component, OnInit, Input } from '@angular/core';
import { EditableComponent } from 'src/app/model/editable-component';
import { Ingredient, Procedure } from 'src/app/model/recipe-model';

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

  addIngredient() {
    this.data.recipe.ingredients.push(new Ingredient());
  }

  addProcedure() {
    this.data.recipe.procedures.push(new Procedure());
  }

  deleteProcedure(index: number) {
    this.data.recipe.procedures.splice(index, 1);
  }

  deleteIngredient(index: number) {
    this.data.recipe.ingredients.splice(index, 1);
  }
}
