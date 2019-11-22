import { TestBed } from '@angular/core/testing';

import { CanjeService } from './canje.service';

describe('CanjeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanjeService = TestBed.get(CanjeService);
    expect(service).toBeTruthy();
  });
});
