import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesAndSocialSciencesComponent } from './humanities-and-social-sciences.component';

describe('HumanitiesAndSocialSciencesComponent', () => {
  let component: HumanitiesAndSocialSciencesComponent;
  let fixture: ComponentFixture<HumanitiesAndSocialSciencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanitiesAndSocialSciencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesAndSocialSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
