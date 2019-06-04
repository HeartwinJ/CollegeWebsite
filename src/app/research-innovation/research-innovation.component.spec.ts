import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchInnovationComponent } from './research-innovation.component';

describe('ResearchInnovationComponent', () => {
  let component: ResearchInnovationComponent;
  let fixture: ComponentFixture<ResearchInnovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchInnovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
