import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuildingsComponent } from './admin-buildings.component';

describe('AdminBuildingsComponent', () => {
  let component: AdminBuildingsComponent;
  let fixture: ComponentFixture<AdminBuildingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuildingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
