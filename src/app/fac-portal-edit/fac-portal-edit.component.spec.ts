import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacPortalEditComponent } from './fac-portal-edit.component';

describe('FacPortalEditComponent', () => {
  let component: FacPortalEditComponent;
  let fixture: ComponentFixture<FacPortalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacPortalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacPortalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
