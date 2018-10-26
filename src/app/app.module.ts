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
import { HomepageComponent } from './views/homepage/homepage.component';
import { RegisterViewComponent } from './views/register-view/register-view.component';
import { ReviewItemComponent } from './component/review-item/review-item.component';
import { RateIconComponent } from './component/rate-icon/rate-icon.component';
import { UserIconComponent } from './component/user-icon/user-icon.component';
import { DialogModalComponent } from './component/dialog-modal/dialog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeitemComponent,
    RecipeComponent,
    SearchItemsComponent,
    SearchEmptyComponent,
    UserViewComponent,
    LoginViewComponent,
    HomepageComponent,
    RegisterViewComponent,
    ReviewItemComponent,
    RateIconComponent,
    UserIconComponent,
    DialogModalComponent
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
          component: HomepageComponent
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
          path: 'login',
          component: LoginViewComponent
       },
       {
          path: 'register',
          component: RegisterViewComponent
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
