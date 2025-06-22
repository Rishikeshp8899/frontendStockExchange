import { TestBed } from '@angular/core/testing';

import { CampaniesServiceService } from './campanies-service.service';

describe('CampaniesServiceService', () => {
  let service: CampaniesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaniesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
