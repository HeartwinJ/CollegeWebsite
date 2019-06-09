import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacPortalViewComponent } from './fac-portal-view.component';

describe('FacPortalViewComponent', () => {
  let component: FacPortalViewComponent;
  let fixture: ComponentFixture<FacPortalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacPortalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacPortalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
