import { TestBed } from '@angular/core/testing';

import {BonoService} from './bono.service';

describe('BonoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonoService = TestBed.get(BonoService);
    expect(service).toBeTruthy();
  });
});
