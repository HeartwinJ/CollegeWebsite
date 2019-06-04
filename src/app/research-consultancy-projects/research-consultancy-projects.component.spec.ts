import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchConsultancyProjectsComponent } from './research-consultancy-projects.component';

describe('ResearchConsultancyProjectsComponent', () => {
  let component: ResearchConsultancyProjectsComponent;
  let fixture: ComponentFixture<ResearchConsultancyProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchConsultancyProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchConsultancyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
