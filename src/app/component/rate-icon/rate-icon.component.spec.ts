import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateIconComponent } from './rate-icon.component';

describe('RateIconComponent', () => {
  let component: RateIconComponent;
  let fixture: ComponentFixture<RateIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
