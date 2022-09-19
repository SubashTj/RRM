import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationReportComponent } from './deviation-report.component';

describe('DeviationReportComponent', () => {
  let component: DeviationReportComponent;
  let fixture: ComponentFixture<DeviationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviationReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
