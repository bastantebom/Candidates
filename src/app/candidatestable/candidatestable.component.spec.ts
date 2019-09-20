import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatestableComponent } from './candidatestable.component';

describe('CandidatestableComponent', () => {
  let component: CandidatestableComponent;
  let fixture: ComponentFixture<CandidatestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
