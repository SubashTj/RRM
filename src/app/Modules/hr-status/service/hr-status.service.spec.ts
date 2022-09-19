import { TestBed } from '@angular/core/testing';

import { HrStatusService } from './hr-status.service';

describe('HrStatusService', () => {
  let service: HrStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
