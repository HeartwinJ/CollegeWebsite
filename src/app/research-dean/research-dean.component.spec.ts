import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDeanComponent } from './research-dean.component';

describe('ResearchDeanComponent', () => {
  let component: ResearchDeanComponent;
  let fixture: ComponentFixture<ResearchDeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchDeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
