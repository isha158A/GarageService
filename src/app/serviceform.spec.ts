import { TestBed } from '@angular/core/testing';

import { Serviceform } from './serviceform';

describe('Serviceform', () => {
  let service: Serviceform;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceform);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
