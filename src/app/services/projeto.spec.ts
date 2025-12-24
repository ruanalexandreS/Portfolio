import { TestBed } from '@angular/core/testing';

import { Projeto } from './projeto';

describe('Projeto', () => {
  let service: Projeto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Projeto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
