import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilEngineeringComponent } from './civil-engineering.component';

describe('CivilEngineeringComponent', () => {
  let component: CivilEngineeringComponent;
  let fixture: ComponentFixture<CivilEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
