import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EceHomeComponent } from './ece-home.component';

describe('EceHomeComponent', () => {
  let component: EceHomeComponent;
  let fixture: ComponentFixture<EceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
