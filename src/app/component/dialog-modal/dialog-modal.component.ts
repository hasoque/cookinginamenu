import { Component, OnInit, ViewChild, Input, ViewContainerRef, Directive, ComponentFactoryResolver } from '@angular/core';
import { Type } from '@angular/compiler/src/core';
import { ModalComponent } from 'src/app/model/editable-component';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { EditReviewComponent } from '../edit-review/edit-review.component';
import { DialogService } from 'src/app/service/dialog.service';

@Directive({
  selector: '[appHost]',
})
export class HostDirective {
  constructor(public _view: ViewContainerRef) {}
}
export class ModalConfig {
  title: string;
  buttons: Array<ModalButton>;
  modalsize: string;
  componentdisplay: Type;
  params: any;
}

/**
 * @alias text
 * @field style
 * @method response asdas
 */
export class ModalButton {
  constructor(public text: string, public response: Function, public style?: string) {
    this.text = text;
    this.style = ((style === '' || style === undefined)  ? 'default' : style);
    this.response = response;
  }
}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent implements OnInit {

  public visible = false;
  public visibleAnimate = false;
  public buttons: Array<ModalButton>;
  public loading: boolean;
  /**
   *
   * "title" = display to title default is Loading,
   * "type" = display to body can be [edit, login, register, alert, confirmation].
   * "editview" = select component that implements ModalComponent only, register it inside edit-modal.ts
   * "editparam" = select component that implements ModalComponent only, register it inside edit-modal.ts
   * "modal-size" = modal-lg or null.
   */
  config: ModalConfig = new ModalConfig();
  @ViewChild(HostDirective) appHost: HostDirective;


  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private dialog: DialogService) {
 }

  public display(visible: boolean) {
    this.visible = visible;
    if (visible) {
      this.createView();
    }
    setTimeout(() => this.visibleAnimate = visible, 150);
  }

  buttonClick(called: Function) {
    this.loading = true;
    called();
    this.loading = false;
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.display(false);
    }
  }

  ngOnInit() {
    this.buttons = new Array<ModalButton>();
  }

  createView() {
    this.setHost(this.config.componentdisplay, this.config.params);

    this.dialog.dialogModal.buttons.push(new ModalButton('Save', () => {
      this.dialog.dialogModal.display(false);
    }, 'success'));

    this.dialog.dialogModal.buttons.push(new ModalButton('Cancel', () => {
      this.dialog.dialogModal.display(false);
    }, 'light'));
  }

  setHost(component: Type, params: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.appHost._view;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ModalComponent>componentRef.instance).data = params;
  }
}
