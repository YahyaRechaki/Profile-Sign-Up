import { TestBed } from '@angular/core/testing';

import { RegisrationServiceService } from './regisration-service.service';

describe('RegisrationServiceService', () => {
  let service: RegisrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
