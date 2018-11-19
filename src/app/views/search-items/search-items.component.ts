import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';
import { ReviewsDataService } from 'src/app/service/review/reviews-data.service';
import { UserService } from 'src/app/service/user/user.service';
import { RecipeDataService } from 'src/app/service/recipe/recipe-data.service';
import { ActivatedRoute, Router } from '@angular/router';

export enum Filter {
  ATLEAST = 1, MUST, EXACT
}

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit, OnDestroy {
  searchKey: String = '';
  searchTags: Array<String> = [];
  searchIngredients: Array<String> = [];
  filtertype: Filter;
  sub: any;

  recipelist: Array<RecipeModel> = [];
  constructor(private revservice: ReviewsDataService,
    private recipeservice: RecipeDataService, private userservice: UserService,
     private aroute: ActivatedRoute) {
    }
  loadMore() {
    this.recipelist = this.recipelist.concat(this.recipeservice.searchForItems(this.searchKey,
     this.searchTags, this.searchIngredients, 5));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();

  }

  ngOnInit() {
    this.sub =  this.aroute.queryParams.subscribe(params => {
      this.searchKey = params.searchk;
      this.searchTags = params.searcht;
      this.searchIngredients = params.searchi;
    });
    this.loadMore();
  }
}
