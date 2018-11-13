import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeitemComponent } from './component/recipeitem/recipeitem.component';
import { RecipeComponent } from './views/recipe/recipe.component';
import { SearchItemsComponent } from './views/search-items/search-items.component';
import { SearchEmptyComponent } from './views/search-empty/search-empty.component';
import { UserViewComponent } from './views/user-view/user-view.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ReviewItemComponent } from './component/review-item/review-item.component';
import { RateIconComponent } from './component/rate-icon/rate-icon.component';
import { UserIconComponent } from './component/user-icon/user-icon.component';
import { DialogModalComponent, HostDirective } from './component/dialog-modal/dialog-modal.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { EditRecipeComponent } from './component/edit-recipe/edit-recipe.component';
import { EditReviewComponent } from './component/edit-review/edit-review.component';
import { DialogService } from './service/dialog.service';
import { ReviewsDataService } from './service/review/reviews-data.service';
import { AccountService } from './service/account/account.service';
import { RecipeDataService } from './service/recipe/recipe-data.service';
import { UserService } from './service/user/user.service';
import { ReviewListComponent } from './component/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeitemComponent,
    RecipeComponent,
    SearchItemsComponent,
    SearchEmptyComponent,
    UserViewComponent,
    HomepageComponent,
    ReviewItemComponent,
    RateIconComponent,
    UserIconComponent,
    DialogModalComponent,
    AuthViewComponent,
    LoginComponent,
    RegisterComponent,
    EditUserComponent,
    EditRecipeComponent,
    EditReviewComponent,
    HostDirective,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
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
          path: 'auth',
          component: AuthViewComponent
       },
       {
          path: '**',
          component: SearchEmptyComponent
       }
    ])
  ],
  providers: [UserService, DialogService, RecipeDataService, ReviewsDataService, AccountService],
  entryComponents: [ EditRecipeComponent, EditReviewComponent, EditUserComponent, LoginComponent, RegisterComponent, ReviewListComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
