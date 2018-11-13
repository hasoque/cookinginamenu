import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { DialogService } from 'src/app/service/dialog.service';
import { ReviewModel } from 'src/app/model/review-model';
import { UserModel } from 'src/app/model/user-model';
import { ReviewListComponent } from '../review-list/review-list.component';

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
  }

  ngOnInit() {
    this.uploader = new UserModel();
    this.reviewList = [
      new ReviewModel(),
      new ReviewModel(),
      new ReviewModel(),
      new ReviewModel(),
      new ReviewModel()];
  }

  onRateClick() {
    this.dialog.dialogModal.config.title = (this.data.name + '\'s Reviews').toUpperCase();
    this.dialog.dialogModal.config.modalsize = 'modal-lg';
    this.dialog.dialogModal.config.componentdisplay = ReviewListComponent;
    this.dialog.dialogModal.config.params.reviewlist = this.reviewList;
    this.dialog.dialogModal.display(true);
  }
}
