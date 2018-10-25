import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe-model';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  recipelist: Array<RecipeModel> = [
    new RecipeModel(),
    new RecipeModel(),
  ];
  constructor() { }
  loadMore() {
    this.recipelist.push(new RecipeModel());
    this.recipelist.push(new RecipeModel());
    this.recipelist.push(new RecipeModel());
    this.recipelist.push(new RecipeModel());
  }

  ngOnInit() {
  }
}
