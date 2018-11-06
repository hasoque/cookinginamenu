import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { UserModel } from 'src/app/model/user-model';
import { ReviewModel } from 'src/app/model/review-model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  data: RecipeModel;
  uploader: UserModel;
  similar: Array<RecipeModel>;
  recommended: Array<RecipeModel>;
  reviewlist: Array<ReviewModel>;
  constructor() {
   this.data = new RecipeModel();
   this.uploader = new UserModel();
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
   this.reviewlist = [
     new ReviewModel(),
     new ReviewModel(),
     new ReviewModel(),
     new ReviewModel(),
     new ReviewModel(),
     new ReviewModel(),
     new ReviewModel(),
     new ReviewModel(),
   ];
  }
  ngOnInit() {

  }
}
