import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { UserModel } from 'src/app/model/user-model';
import { ReviewModel } from 'src/app/model/review-model';
import { DialogService } from 'src/app/service/dialog.service';
import { RecipeDataService } from 'src/app/service/recipe/recipe-data.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewsDataService } from 'src/app/service/review/reviews-data.service';
import { UserService } from 'src/app/service/user/user.service';
import { EditRecipeComponent } from 'src/app/component/edit-recipe/edit-recipe.component';
import { ModalButton } from 'src/app/component/dialog-modal/dialog-modal.component';
import { EditReviewComponent } from 'src/app/component/edit-review/edit-review.component';
import { ReviewListComponent } from 'src/app/component/review-list/review-list.component';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnDestroy {

  data: RecipeModel;
  uploader: UserModel;
  similar: Array<RecipeModel>;
  recommended: Array<RecipeModel>;
  reviewlist: Array<ReviewModel>;
  sub: any;

  constructor(private dialog: DialogService, private revservice: ReviewsDataService,
     private recipeservice: RecipeDataService, private userservice: UserService,
      private actvroute: ActivatedRoute, private account: AccountService) {
  }

  ngOnInit() {
    this.sub =  this.actvroute.paramMap.subscribe(params => {
      console.log(params);
      this.data = this.recipeservice.getRecipe(parseInt(params.get('id'), 10));
      this.uploader = this.userservice.getUser(this.data.uploaderid);
      this.similar = this.recipeservice.searchForItems('', [], [], 5);
      this.recommended = this.recipeservice.searchForItems('', [], [], 5);
      this.reviewlist = this.revservice.getReviewsFrom(this.data.id, 5);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addToFavorites() {
    this.account.addToFavorites(this.data.id);
  }

  onReviewRecipe() {
    this.dialog.dialogModal.config.title = 'Review ' + this.data.name.toLocaleUpperCase();
    this.dialog.dialogModal.config.componentdisplay = EditReviewComponent;
    this.dialog.dialogModal.config.params = {review: new ReviewModel()};
    this.dialog.dialogModal.config.modalsize = '';
    this.dialog.dialogModal.buttons = [new ModalButton('Save', () => {
      for (let x = 9; x < 5000; x++) {
        console.log('abc');
      }
    }, 'success')
    , new ModalButton('Cancel', () => {
      this.dialog.dialogModal.display(false);
    }, 'light')];
    this.dialog.dialogModal.display(true);
  }

  editRecipe() {
    this.dialog.dialogModal.config.title = 'Edit Recipe ' + this.data.name;
    this.dialog.dialogModal.config.componentdisplay = EditRecipeComponent;
    this.dialog.dialogModal.config.params = {recipe: this.data};
    this.dialog.dialogModal.config.modalsize = 'modal-lg';
    this.dialog.dialogModal.buttons = [new ModalButton('Save Edit', () => {
      this.dialog.dialogModal.display(false);
    }, 'success')
    , new ModalButton('Cancel Edit', () => {
      this.dialog.dialogModal.display(false);
    }, 'light')];
    this.dialog.dialogModal.display(true);
  }

  onShowReview() {
    this.dialog.dialogModal.config.title = (this.data.name + '\'s Reviews').toUpperCase();
    this.dialog.dialogModal.config.modalsize = 'modal-lg';
    this.dialog.dialogModal.config.componentdisplay = ReviewListComponent;
    this.dialog.dialogModal.config.params = {recipeoid: this.data.id};
    this.dialog.dialogModal.config.buttons = [];
    this.dialog.dialogModal.display(true);
  }
}
