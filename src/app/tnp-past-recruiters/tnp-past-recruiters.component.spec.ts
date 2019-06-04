import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpPastRecruitersComponent } from './tnp-past-recruiters.component';

describe('TnpPastRecruitersComponent', () => {
  let component: TnpPastRecruitersComponent;
  let fixture: ComponentFixture<TnpPastRecruitersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnpPastRecruitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnpPastRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
