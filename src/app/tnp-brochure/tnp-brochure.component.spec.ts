import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpBrochureComponent } from './tnp-brochure.component';

describe('TnpBrochureComponent', () => {
  let component: TnpBrochureComponent;
  let fixture: ComponentFixture<TnpBrochureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnpBrochureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnpBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
