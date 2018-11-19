import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel, ReviewedRecipe, TagRates } from 'src/app/model/user-model';
import { RecipeModel } from 'src/app/model/recipe-model';
import { DialogService } from 'src/app/service/dialog.service';
import { UserService } from 'src/app/service/user/user.service';
import { RecipeDataService } from 'src/app/service/recipe/recipe-data.service';
import { ReviewsDataService } from 'src/app/service/review/reviews-data.service';
import { ActivatedRoute } from '@angular/router';
import { EditUserComponent } from 'src/app/component/edit-user/edit-user.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit, OnDestroy {
  info: UserModel;
  topreviews: Array<ReviewedRecipe>;
  toprecipes: Array<RecipeModel>;
  favorites: Array<RecipeModel>;
  contributionstag: Array<TagRates>;
  sub: any;

  constructor(private dialog: DialogService, private uservice: UserService,
     private recipeservice: RecipeDataService, private reviewservice: ReviewsDataService,
      private actvroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.actvroute.paramMap.subscribe(params => {
      this.info = this.uservice.getUser(parseInt(params.get('id'), 10));
      this.topreviews = this.uservice.getReviewdRecipes(this.info.id);
      this.toprecipes = this.recipeservice.searchForItems('', [], [], 3);
      this.contributionstag = this.uservice.getContributionTags(this.info.id);
      this.favorites = this.recipeservice.getFavoriteRecipes(this.info.id);
    });
  }

  onFollowBtn() {
    this.uservice.followUser(this.info.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  formatFollower(num: number): string {
    if (num < 9999) {
      return num + '';
    }
    const suffix = ['k', 'M', 'B'];
    const sufindex = Math.floor(Math.log10(num) / 3);
    return (num / Math.pow(1000, sufindex)).toFixed(3 - Math.log10(num) % 3) + suffix[sufindex - 1];
  }

  onEditing() {
    this.dialog.dialogModal.config.title = 'Edit Recipe ' + this.info.name;
    this.dialog.dialogModal.config.componentdisplay = EditUserComponent;
    this.dialog.dialogModal.config.params = {user: this.info};
    this.dialog.dialogModal.config.modalsize = 'modal-lg';
    this.dialog.dialogModal.display(true);
  }
}
