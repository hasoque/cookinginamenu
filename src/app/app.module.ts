import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeitemComponent } from './component/recipeitem/recipeitem.component';
import { RecipeComponent } from './views/recipe/recipe.component';
import { SearchItemsComponent } from './views/search-items/search-items.component';
import { SearchEmptyComponent } from './views/search-empty/search-empty.component';
import { UserViewComponent } from './views/user-view/user-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeitemComponent,
    RecipeComponent,
    SearchItemsComponent,
    SearchEmptyComponent,
    UserViewComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
       {
          path: '',
          component: SearchItemsComponent
       },
       {
          path: 'recipes',
          component: SearchItemsComponent
       },
       {
          path: 'hot',
          component: SearchItemsComponent
       },
       {
          path: 'trending',
          component: SearchItemsComponent
       },
       {
          path: 'fresh',
          component: SearchItemsComponent
       },
       {
          path: 'recipe/:id',
          component: RecipeComponent
       },
       {
          path: 'user/:id',
          component: UserViewComponent
       },
       {
          path: '**',
          component: SearchEmptyComponent
       }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
