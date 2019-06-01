import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicDocumentsComponent } from './academic-documents.component';

describe('AcademicDocumentsComponent', () => {
  let component: AcademicDocumentsComponent;
  let fixture: ComponentFixture<AcademicDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
