import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunneltimelineComponent } from './funneltimeline.component';

describe('FunneltimelineComponent', () => {
  let component: FunneltimelineComponent;
  let fixture: ComponentFixture<FunneltimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunneltimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunneltimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
