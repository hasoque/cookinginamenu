import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { DialogService } from 'src/app/service/dialog.service';
import { ReviewModel } from 'src/app/model/review-model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

  @Input() data: RecipeModel;
  constructor(private dialog: DialogService) {

  }

  ngOnInit() {

  }

  onRateClick() {
    this.dialog.dialogModal.data['title'] = (this.data.name + '\'s Reviews').toUpperCase();
    this.dialog.dialogModal.data['reviewlist'] = this.data.reviewlist;
    this.dialog.dialogModal.display(true);
  }
}
