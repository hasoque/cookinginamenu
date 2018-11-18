import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export enum Filter {
  ATLEAST = 1, MUST, EXACT
}
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchString: string;
  searchTags: Array<String>;
  searchIngredients: Array<String>;
  filtertype: Filter;

  constructor(private router: Router) {

  }

  /**
   * navigate through /recipes with params
   * @param searchs search string [creator, recipename, tags](if searcht and searchi is blank[ingredients, tags]) simplified
   * @param searcht search tags to filter by tags
   * @param searchi search ingredients to filter by ingredients
   * @param filtertype filter Filter[ATLEAST = 1, MUST = 2, EXACT = 3]
   */
  setSearch(searchs: string, searchtag?: Array<String>, searchi?: Array<String>, filtertype?: Filter) {
    this.searchString = searchs;
    this.searchTags = searchtag;
    this.searchIngredients = searchi;
    this.filtertype = filtertype;
  }

  setSearchString(text: string) {
    this.searchString = text;
  }

  setSearchTags(tags: Array<String>) {
    this.searchTags = tags;
  }

  setSearchIngredients(ingredients: Array<String>) {
    this.searchIngredients = ingredients;
  }

  setSearchFilter(type: Filter) {
    this.filtertype = type;

  }

  navigate() {
  }
}
