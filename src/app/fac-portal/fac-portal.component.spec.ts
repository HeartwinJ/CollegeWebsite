import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacPortalComponent } from './fac-portal.component';

describe('FacPortalComponent', () => {
  let component: FacPortalComponent;
  let fixture: ComponentFixture<FacPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
