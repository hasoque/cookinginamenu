import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { UserModel } from 'src/app/model/user-model';
import { ReviewModel } from 'src/app/model/review-model';
import { DialogService } from 'src/app/service/dialog.service';
import { RecipeDataService } from 'src/app/service/recipe/recipe-data.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewsDataService } from 'src/app/service/review/reviews-data.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, AfterViewInit {

  data: RecipeModel;
  uploader: UserModel;
  similar: Array<RecipeModel>;
  recommended: Array<RecipeModel>;
  reviewlist: Array<ReviewModel>;

  constructor(private dialog: DialogService, private revservice: ReviewsDataService,
     private recipeservice: RecipeDataService, private userservice: UserService,
      private actvroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.actvroute.paramMap.subscribe(params => {
      console.log(params);
      this.data = this.recipeservice.getRecipe(parseInt(params.get('id'), 10));
      this.uploader = this.userservice.getUser(this.data.uploaderid);
      this.similar = this.recipeservice.searchForItems('', [], [], 5);
      this.recommended = this.recipeservice.searchForItems('', [], [], 5);
      this.reviewlist = this.revservice.getReviewsFrom(this.data);
    });
  }

  ngAfterViewInit() {
  }

  editRecipe() {
    this.dialog.dialogModal.display(true);
    this.dialog.dialogModal.data['title'] = 'Edit Recipe ' + this.data.name;
    this.dialog.dialogModal.data['type'] = 'edit';
    this.dialog.dialogModal.data['editview'] = 'edit-recipe';
    this.dialog.dialogModal.data['editparam'] = {recipe: this.data};
    this.dialog.dialogModal.data['modal-size'] = 'modal-lg';
  }
}
