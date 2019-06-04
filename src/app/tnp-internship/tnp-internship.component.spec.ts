import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpInternshipComponent } from './tnp-internship.component';

describe('TnpInternshipComponent', () => {
  let component: TnpInternshipComponent;
  let fixture: ComponentFixture<TnpInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnpInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnpInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
