import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActsComponent } from './admin-acts.component';

describe('AdminActsComponent', () => {
  let component: AdminActsComponent;
  let fixture: ComponentFixture<AdminActsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
