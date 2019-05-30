import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilHomeComponent } from './civil-home.component';

describe('CivilHomeComponent', () => {
  let component: CivilHomeComponent;
  let fixture: ComponentFixture<CivilHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
