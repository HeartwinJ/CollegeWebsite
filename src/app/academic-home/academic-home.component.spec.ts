import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicHomeComponent } from './academic-home.component';

describe('AcademicHomeComponent', () => {
  let component: AcademicHomeComponent;
  let fixture: ComponentFixture<AcademicHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
