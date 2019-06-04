import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeanComponent } from './admin-dean.component';

describe('AdminDeanComponent', () => {
  let component: AdminDeanComponent;
  let fixture: ComponentFixture<AdminDeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
