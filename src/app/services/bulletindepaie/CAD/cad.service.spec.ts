import { TestBed } from '@angular/core/testing';

import { CADService } from './cad.service';

describe('CADService', () => {
  let service: CADService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CADService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
