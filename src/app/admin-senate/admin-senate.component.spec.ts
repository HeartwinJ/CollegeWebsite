import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSenateComponent } from './admin-senate.component';

describe('AdminSenateComponent', () => {
  let component: AdminSenateComponent;
  let fixture: ComponentFixture<AdminSenateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSenateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSenateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
