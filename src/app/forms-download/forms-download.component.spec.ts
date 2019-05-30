import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDownloadComponent } from './forms-download.component';

describe('FormsDownloadComponent', () => {
  let component: FormsDownloadComponent;
  let fixture: ComponentFixture<FormsDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
