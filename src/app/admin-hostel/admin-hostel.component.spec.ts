import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHostelComponent } from './admin-hostel.component';

describe('AdminHostelComponent', () => {
  let component: AdminHostelComponent;
  let fixture: ComponentFixture<AdminHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
