import { Component, OnInit } from '@angular/core';
import { UserModel} from '../../app.component';

interface Review {
  id: number;
  name: string;
  reviewtext: string;
  rating: number;
  likes: number;
  date: Date;
  reviewer: UserModel;
}

interface Procedure {
  stepnumber: string;
  proc: string;
}

interface Ingredient {
  ingredientname: string;
  quantity: string;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipename: string;
  imglink: string;
  taglist: Array<string>;
  reviewlist: Array<Review>;
  uploader: UserModel;
  date: Date;
  constructor() { }
  ngOnInit() {

  }
}
