import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVigilanceComponent } from './admin-vigilance.component';

describe('AdminVigilanceComponent', () => {
  let component: AdminVigilanceComponent;
  let fixture: ComponentFixture<AdminVigilanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVigilanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVigilanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
