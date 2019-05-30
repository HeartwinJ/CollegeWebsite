import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilLabComponent } from './civil-lab.component';

describe('CivilLabComponent', () => {
  let component: CivilLabComponent;
  let fixture: ComponentFixture<CivilLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
