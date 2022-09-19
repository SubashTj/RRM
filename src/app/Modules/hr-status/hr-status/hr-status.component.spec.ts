import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrStatusComponent } from './hr-status.component';

describe('HrStatusComponent', () => {
  let component: HrStatusComponent;
  let fixture: ComponentFixture<HrStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
