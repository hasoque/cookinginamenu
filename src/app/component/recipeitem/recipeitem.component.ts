import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { DialogService } from 'src/app/service/dialog.service';
import { ReviewModel } from 'src/app/model/review-model';
import { UserModel } from 'src/app/model/user-model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.scss']
})
export class RecipeitemComponent implements OnInit {

  @Input() data: RecipeModel;
  uploader: UserModel;
  reviewList: Array<ReviewModel>;
  constructor(private dialog: DialogService) {
    this.uploader = new UserModel();
    this.reviewList = [
      new ReviewModel(),
      new ReviewModel(),
      new ReviewModel(),
      new ReviewModel(),
      new ReviewModel()];
  }

  ngOnInit() {

  }

  onRateClick() {
    this.dialog.dialogModal.data['title'] = (this.data.name + '\'s Reviews').toUpperCase();
    this.dialog.dialogModal.data['modal-size'] = 'modal-lg';
    this.dialog.dialogModal.data['type'] = 'reviews';
    this.dialog.dialogModal.data['reviewlist'] = this.reviewList;
    this.dialog.dialogModal.display(true);
  }
}
