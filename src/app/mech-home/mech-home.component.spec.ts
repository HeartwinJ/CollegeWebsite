import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechHomeComponent } from './mech-home.component';

describe('MechHomeComponent', () => {
  let component: MechHomeComponent;
  let fixture: ComponentFixture<MechHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
