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
import { DialogModalComponent } from './component/dialog-modal/dialog-modal.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

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
    RegisterComponent
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
  providers: [DialogModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
