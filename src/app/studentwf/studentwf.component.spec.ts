import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentwfComponent } from './studentwf.component';

describe('StudentwfComponent', () => {
  let component: StudentwfComponent;
  let fixture: ComponentFixture<StudentwfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentwfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentwfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
