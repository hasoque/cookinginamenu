import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { ReviewModel } from 'src/app/model/review-model';
import { UserModel } from 'src/app/model/user-model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsDataService {

  constructor() { }

  /**
   * get reviews of recipe input
   * @param recipe get the reviews of recipe model
   * @param chunk maximum length of result
   */
  getReviewsFrom(recipeid: number, chunk: number): Array<ReviewModel> {
    return [new ReviewModel(), new ReviewModel(), new ReviewModel(), new ReviewModel(), new ReviewModel()];
  }
  /**
   *
   * @param recipe review to insert or update
   * @param byUser uploader of review
   */
  putReviewTo(recipe: RecipeModel, byUser: UserModel) {

  }

  upvote(reviewid: number, upvoterid: number) {

  }
  downvote(reviewid: number, upvoterid: number) {

  }
  /**
   * reviews of corresponding user
   * @param user owner of review
   */
  getReviewsOf(userid: number): Array<ReviewModel> {
    return [new ReviewModel(), new ReviewModel(), new ReviewModel(), new ReviewModel(), new ReviewModel()];
  }
}
