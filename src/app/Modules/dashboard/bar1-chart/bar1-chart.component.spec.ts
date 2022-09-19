import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar1ChartComponent } from './bar1-chart.component';

describe('Bar1ChartComponent', () => {
  let component: Bar1ChartComponent;
  let fixture: ComponentFixture<Bar1ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bar1ChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bar1ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
