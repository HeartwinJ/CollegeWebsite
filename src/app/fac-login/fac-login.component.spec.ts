import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacLoginComponent } from './fac-login.component';

describe('FacLoginComponent', () => {
  let component: FacLoginComponent;
  let fixture: ComponentFixture<FacLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
