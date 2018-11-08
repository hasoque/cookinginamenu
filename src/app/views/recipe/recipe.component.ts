import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { UserModel } from 'src/app/model/user-model';
import { ReviewModel } from 'src/app/model/review-model';
import { DialogService } from 'src/app/service/dialog.service';

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
  constructor(private dialog: DialogService) {
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

  editRecipe() {
    this.dialog.dialogModal.display(true);
    this.dialog.dialogModal.data['title'] = 'Edit Recipe ' + this.data.id;
    this.dialog.dialogModal.data['type'] = 'edit';
    this.dialog.dialogModal.data['editview'] = 'edit-recipe';
    this.dialog.dialogModal.data['editparam'] = {recipe: this.data};
    this.dialog.dialogModal.data['modal-size'] = 'modal-lg';
  }
}
