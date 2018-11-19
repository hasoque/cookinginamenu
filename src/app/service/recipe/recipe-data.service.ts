import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { UserModel } from 'src/app/model/user-model';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  constructor() { }

  /**
   * get simplified content of recipe from server
   * @param searchq query of keywords
   * @param searcht tags used
   * @param searchi ingredients
   * @param chunk item from chunk * 5 to chunk * 5 + 5
   */
  searchForItems(searchq: String, searcht: Array<String>, searchi: Array<String>, chunk: number): Array<RecipeModel> {
    return [new RecipeModel()
      , new RecipeModel(), new RecipeModel(), new RecipeModel(), new RecipeModel()];

  }

  /**
   * get the full content of RecipeModel
   * @param id id of recipe
   */
  getRecipe(id: number): RecipeModel {
    return new RecipeModel(id);
  }

  /**
   * insert or update a recipe to database
   * @param model recipe to update or insert
   * @param uploader uploader of recipe
   */
  putRecipe(model: RecipeModel, uploader: UserModel) {

  }

  getFavoriteRecipes() {

  }
}
