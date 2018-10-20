import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

  name: string;
  description: string;
  trating: number;
  avgrating: number;
  uploadername: string;
  userid: number;
  recipeid: number;
  constructor() {

  }
  ngOnInit() {
    this.name = 'dragon sword';
    this.uploadername = 'user.name';
    this.userid = 0;
    this.recipeid = 0;
    this.trating = 2323;
    this.avgrating = 1;
    this.description = 'dota2 isthebest dota2 isthebest dota2 isthebest dota2 isthebest dota2 isthebest dota2 isthebest dota2 isthebest ';
  }
  counter(i: number) {
    return new Array(i);
  }
}
