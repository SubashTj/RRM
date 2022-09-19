import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalInterviewerComponent } from './external-interviewer.component';

describe('ExternalInterviewerComponent', () => {
  let component: ExternalInterviewerComponent;
  let fixture: ComponentFixture<ExternalInterviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalInterviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
