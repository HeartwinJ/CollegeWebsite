import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHodComponent } from './admin-hod.component';

describe('AdminHodComponent', () => {
  let component: AdminHodComponent;
  let fixture: ComponentFixture<AdminHodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
