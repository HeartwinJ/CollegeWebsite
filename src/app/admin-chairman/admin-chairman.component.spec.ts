import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChairmanComponent } from './admin-chairman.component';

describe('AdminChairmanComponent', () => {
  let component: AdminChairmanComponent;
  let fixture: ComponentFixture<AdminChairmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChairmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChairmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
