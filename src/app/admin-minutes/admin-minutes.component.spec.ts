import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMinutesComponent } from './admin-minutes.component';

describe('AdminMinutesComponent', () => {
  let component: AdminMinutesComponent;
  let fixture: ComponentFixture<AdminMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
