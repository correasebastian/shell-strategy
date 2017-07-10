import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Sub2Component } from './feature1-sub2.component';

describe('Feature1Sub2Component', () => {
  let component: Feature1Sub2Component;
  let fixture: ComponentFixture<Feature1Sub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Sub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
