import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechLabComponent } from './mech-lab.component';

describe('MechLabComponent', () => {
  let component: MechLabComponent;
  let fixture: ComponentFixture<MechLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
