import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { UserModel } from 'src/app/model/user-model';
import { ReviewModel } from 'src/app/model/review-model';
import { RecipeModel } from 'src/app/model/recipe-model';
import { DialogService } from 'src/app/service/dialog.service';

class TagRates {
  tagname: string;
  avgrate: number;
  totalrate: number;
  totalpost: number;
  constructor() {
    this.tagname = faker.random.word();
    this.avgrate = faker.random.number(5);
    this.totalrate = faker.random.number(100);
    this.totalpost = faker.random.number(1000);
  }
}

class ReviewedRecipe {
  recipe: RecipeModel;
  uploader: UserModel;
  review: ReviewModel;

  constructor() {
    this.recipe = new RecipeModel();
    this.uploader = new UserModel();
    this.review = new ReviewModel();
  }
}

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

  constructor(private dialog: DialogService) {
  }

  ngOnInit() {
    this.info = new UserModel();
    this.topreviews = [
      new ReviewedRecipe(),
      new ReviewedRecipe(),
      new ReviewedRecipe(),
      new ReviewedRecipe(),
      new ReviewedRecipe(),
      new ReviewedRecipe(),
      new ReviewedRecipe(),
      new ReviewedRecipe()
    ];
    this.toprecipes = [
      new RecipeModel(),
      new RecipeModel(),
      new RecipeModel(),
      new RecipeModel(),
      new RecipeModel()
    ];
    this.contributionstag = [
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
      new TagRates(),
    ];
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
