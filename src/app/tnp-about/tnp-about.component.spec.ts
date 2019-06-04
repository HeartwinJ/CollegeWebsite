import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpAboutComponent } from './tnp-about.component';

describe('TnpAboutComponent', () => {
  let component: TnpAboutComponent;
  let fixture: ComponentFixture<TnpAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnpAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnpAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
