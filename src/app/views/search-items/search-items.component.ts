import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { ReviewsDataService } from 'src/app/service/review/reviews-data.service';
import { UserService } from 'src/app/service/user/user.service';
import { RecipeDataService } from 'src/app/service/recipe/recipe-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {

  recipelist: Array<RecipeModel> = [];
  constructor(private revservice: ReviewsDataService,
    private recipeservice: RecipeDataService, private userservice: UserService,
     private actvroute: ActivatedRoute) {}
  loadMore() {
    this.recipelist = this.recipelist.concat(this.recipeservice.searchForItems('', [], [], 5));
  }

  ngOnInit() {
    this.loadMore();
  }
}
