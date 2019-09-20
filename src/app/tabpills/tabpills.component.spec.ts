import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabpillsComponent } from './tabpills.component';

describe('TabpillsComponent', () => {
  let component: TabpillsComponent;
  let fixture: ComponentFixture<TabpillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabpillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabpillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
