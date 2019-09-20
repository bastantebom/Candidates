import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunneltableComponent } from './funneltable.component';

describe('FunneltableComponent', () => {
  let component: FunneltableComponent;
  let fixture: ComponentFixture<FunneltableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunneltableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunneltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
