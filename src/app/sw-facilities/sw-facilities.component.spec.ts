import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwFacilitiesComponent } from './sw-facilities.component';

describe('SwFacilitiesComponent', () => {
  let component: SwFacilitiesComponent;
  let fixture: ComponentFixture<SwFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
