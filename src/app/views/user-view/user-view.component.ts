import { Component, OnInit } from '@angular/core';
import { UserModel, ReviewedRecipe, TagRates } from 'src/app/model/user-model';
import { RecipeModel } from 'src/app/model/recipe-model';
import { DialogService } from 'src/app/service/dialog.service';
import { UserService } from 'src/app/service/user/user.service';
import { RecipeDataService } from 'src/app/service/recipe/recipe-data.service';
import { ReviewsDataService } from 'src/app/service/review/reviews-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  info: UserModel;
  topreviews: Array<ReviewedRecipe>;
  toprecipes: Array<RecipeModel>;
  contributionstag: Array<TagRates>;

  constructor(private dialog: DialogService, private uservice: UserService,
     private recipeservice: RecipeDataService, private reviewservice: ReviewsDataService,
      private actvroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.actvroute.paramMap.subscribe(params => {
      this.info = this.uservice.getUser(parseInt(params.get('id'), 10));
      this.topreviews = this.uservice.getReviewdRecipes(this.info.id);
      this.toprecipes = this.recipeservice.searchForItems('', [], [], 3);
      this.contributionstag = this.uservice.getContributionTags(this.info.id);
    });
  }
  onEditing() {
    this.dialog.dialogModal.display(true);
    this.dialog.dialogModal.data['title'] = 'Edit Recipe ' + this.info.name;
    this.dialog.dialogModal.data['type'] = 'edit';
    this.dialog.dialogModal.data['editview'] = 'edit-user';
    this.dialog.dialogModal.data['editparam'] = {user: this.info};
    this.dialog.dialogModal.data['modal-size'] = 'modal-lg';
  }
}
