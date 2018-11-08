import { Component, OnInit, AfterViewInit, ViewChild, Directive, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { EditableComponent } from 'src/app/model/editable-component';
import { Type } from '@angular/compiler/src/core';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { log } from 'util';

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
export class EditModalComponent implements OnInit, AfterViewInit {
  @ViewChild(HostDirective) appHost: HostDirective;
  @Input() displaycomponent: string;
  @Input() params: any;
  hash = {
    'edit-recipe': EditRecipeComponent,
    'edit-review': EditRecipeComponent,
    'edit-user': EditUserComponent
  };

  ngAfterViewInit() {
  }
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
     private dialog: DialogModalComponent) {
  }

  ngOnInit() {
    this.setHost(this.hash[this.displaycomponent], this.params);
  }

  setHost(component: Type, params: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.appHost._view;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<EditableComponent>componentRef.instance).data = params;
  }
}
