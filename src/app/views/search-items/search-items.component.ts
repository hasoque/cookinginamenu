import { Component, OnInit } from '@angular/core';
import { RecipeitemComponent } from '../../component/recipeitem/recipeitem.component';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  recipelist: Array<RecipeitemComponent> = [
    new RecipeitemComponent(),
    new RecipeitemComponent(),
  ];
  constructor() { }
  loadMore() {
    this.recipelist.push(new RecipeitemComponent());
    this.recipelist.push(new RecipeitemComponent());
    this.recipelist.push(new RecipeitemComponent());
    this.recipelist.push(new RecipeitemComponent());
  }

  ngOnInit() {
  }
}
