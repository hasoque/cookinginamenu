import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DialogModalComponent, ModalButton } from './component/dialog-modal/dialog-modal.component';
import { DialogService } from './service/dialog.service';
import { Router } from '@angular/router';
import { AccountService } from './service/account/account.service';
import { RecipeModel } from './model/recipe-model';
import { EditRecipeComponent } from './component/edit-recipe/edit-recipe.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ciamclient';
  @ViewChild('dialog') modal: DialogModalComponent;
  constructor(private dservice: DialogService, private _router: Router,
     private account: AccountService) {
  }

  loggedin() {
    return this.account.isLoggedIn();
  }

  getUserLoggedIn() {
    return this.account.getUserLoggedIn();
  }

  createRecipe() {
    this.modal.config.title = 'Upload Recipe';
    this.modal.config.componentdisplay = EditRecipeComponent;
    this.modal.config.params = {recipe: new RecipeModel()};
    this.modal.config.modalsize = 'modal-lg';
    this.modal.display(true);
  }

  onBtnLogin() {
    this.modal.config.title = 'Login';
    this.modal.config.componentdisplay = LoginComponent;
    this.modal.config.modalsize = '';
    this.modal.display(true);
  }

  onBtnRegister() {
    this.modal.config.title = 'Register';
    this.modal.config.modalsize = '';
    this.modal.config.componentdisplay = RegisterComponent;
    this.modal.buttons = [new ModalButton('Register', () => {}, 'success'),
                          new ModalButton('Cancel', () => {}, 'light')];
    this.modal.display(true);
  }

  ngAfterViewInit() {
    this.dservice.setDialog(this.modal);
  }

  ngOnInit() {

  }

  public onModalClicked(event: MouseEvent): void {
    this.modal.onContainerClicked(event);
  }
}
