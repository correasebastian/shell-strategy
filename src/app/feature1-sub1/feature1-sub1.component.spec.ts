import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Sub1Component } from './feature1-sub1.component';

describe('Feature1Sub1Component', () => {
  let component: Feature1Sub1Component;
  let fixture: ComponentFixture<Feature1Sub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Sub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
