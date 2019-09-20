import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatestabsComponent } from './candidatestabs.component';

describe('CandidatestabsComponent', () => {
  let component: CandidatestabsComponent;
  let fixture: ComponentFixture<CandidatestabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatestabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatestabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
