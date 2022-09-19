import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChart1Component } from './donut-chart1.component';

describe('DonutChart1Component', () => {
  let component: DonutChart1Component;
  let fixture: ComponentFixture<DonutChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutChart1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
