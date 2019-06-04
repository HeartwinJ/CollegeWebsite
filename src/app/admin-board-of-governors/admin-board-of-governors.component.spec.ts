import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBoardOfGovernorsComponent } from './admin-board-of-governors.component';

describe('AdminBoardOfGovernorsComponent', () => {
  let component: AdminBoardOfGovernorsComponent;
  let fixture: ComponentFixture<AdminBoardOfGovernorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBoardOfGovernorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBoardOfGovernorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
