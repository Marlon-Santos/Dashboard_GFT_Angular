import { TestBed } from '@angular/core/testing';

import { ControlePerdasService } from './controle-perdas.service';

describe('ControlePerdasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlePerdasService = TestBed.get(ControlePerdasService);
    expect(service).toBeTruthy();
  });
});
