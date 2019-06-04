import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistrarComponent } from './admin-registrar.component';

describe('AdminRegistrarComponent', () => {
  let component: AdminRegistrarComponent;
  let fixture: ComponentFixture<AdminRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
