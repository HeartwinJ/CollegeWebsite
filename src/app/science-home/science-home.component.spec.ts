import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceHomeComponent } from './science-home.component';

describe('ScienceHomeComponent', () => {
  let component: ScienceHomeComponent;
  let fixture: ComponentFixture<ScienceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
