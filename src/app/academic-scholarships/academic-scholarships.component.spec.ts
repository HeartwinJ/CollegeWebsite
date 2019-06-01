import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicScholarshipsComponent } from './academic-scholarships.component';

describe('AcademicScholarshipsComponent', () => {
  let component: AcademicScholarshipsComponent;
  let fixture: ComponentFixture<AcademicScholarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicScholarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicScholarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
