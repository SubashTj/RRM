import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementReportComponent } from './requirement-report.component';

describe('RequirementReportComponent', () => {
  let component: RequirementReportComponent;
  let fixture: ComponentFixture<RequirementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequirementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
