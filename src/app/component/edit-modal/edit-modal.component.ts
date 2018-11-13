import { Component, OnInit, AfterViewInit, ViewChild, Directive, ViewContainerRef,
  ComponentFactoryResolver, Input, OnDestroy } from '@angular/core';
import { EditableComponent } from 'src/app/model/editable-component';
import { Type } from '@angular/compiler/src/core';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { EditReviewComponent } from '../edit-review/edit-review.component';
import { DialogService } from 'src/app/service/dialog.service';
import { ModalButton } from '../dialog-modal/dialog-modal.component';

@Directive({
  selector: '[appHost]',
})
export class HostDirective {
  constructor(public _view: ViewContainerRef) {}
}

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(HostDirective) appHost: HostDirective;
  @Input() displaycomponent: string;
  @Input() params: any;
  hash = {
    'edit-recipe': EditRecipeComponent,
    'edit-review': EditReviewComponent,
    'edit-user': EditUserComponent
  };

  ngAfterViewInit() {

  }
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
     private dialog: DialogService) {
  }

  ngOnInit() {
    this.setHost(this.hash[this.displaycomponent], this.params);

    this.dialog.dialogModal.buttons.push(new ModalButton('Save', () => {
      this.dialog.dialogModal.display(false);
    }, 'success'));

    this.dialog.dialogModal.buttons.push(new ModalButton('Cancel', () => {
      this.dialog.dialogModal.display(false);
    }, 'light'));
  }

  ngOnDestroy() {
    this.params = null;
  }

  setHost(component: Type, params: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.appHost._view;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<EditableComponent>componentRef.instance).data = params;
  }
}
