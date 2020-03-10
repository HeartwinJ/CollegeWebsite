import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TendersComponent } from './tenders.component';

describe('TendersComponent', () => {
  let component: TendersComponent;
  let fixture: ComponentFixture<TendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
