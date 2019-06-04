import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDirectorComponent } from './admin-director.component';

describe('AdminDirectorComponent', () => {
  let component: AdminDirectorComponent;
  let fixture: ComponentFixture<AdminDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
