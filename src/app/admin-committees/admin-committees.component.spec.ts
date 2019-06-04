import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommitteesComponent } from './admin-committees.component';

describe('AdminCommitteesComponent', () => {
  let component: AdminCommitteesComponent;
  let fixture: ComponentFixture<AdminCommitteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCommitteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
