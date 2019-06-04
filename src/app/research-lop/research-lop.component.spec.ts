import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchLopComponent } from './research-lop.component';

describe('ResearchLopComponent', () => {
  let component: ResearchLopComponent;
  let fixture: ComponentFixture<ResearchLopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchLopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
