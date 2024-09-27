import { TestBed } from '@angular/core/testing';

import { EnregistrerpagewordService } from './enregistrerpageword.service';

describe('EnregistrerpagewordService', () => {
  let service: EnregistrerpagewordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnregistrerpagewordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
