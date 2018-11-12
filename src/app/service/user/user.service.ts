import { Injectable } from '@angular/core';
import { UserModel, TagRates, ReviewedRecipe } from 'src/app/model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  /**
   * get the user based on the id input
   * @param id id of user to get
   */
  getUser(id: number): UserModel {
    return new UserModel(id);
  }

  /**
   * insert or update user input
   * @param user user to update or insert
   */
  putUser(user: UserModel): boolean {
    return false;
  }

  getContributionTags(id: number) {
    return [new TagRates(), new TagRates(), new TagRates(), new TagRates(), new TagRates()];
  }

  getReviewdRecipes(id: number) {
    return [new ReviewedRecipe(), new ReviewedRecipe(), new ReviewedRecipe(), new ReviewedRecipe()
      , new ReviewedRecipe()];
  }
}
