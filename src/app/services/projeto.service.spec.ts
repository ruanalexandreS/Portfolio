import { describe, it, expect, beforeEach } from 'vitest';
import { Injector, runInInjectionContext } from '@angular/core';
import { ProjetoService } from './projeto.service';
import { IdiomaService } from './idioma.service';

describe('ProjetoService', () => {
  let service: ProjetoService;

  beforeEach(() => {
    const injector = Injector.create({
      providers: [
        { provide: IdiomaService, useValue: new IdiomaService() }
      ]
    });
    service = runInInjectionContext(injector, () => new ProjetoService());
  });

  it('deve retornar 3 projetos', () => {
    expect(service.projetos().length).toBe(3);
  });

  it('todos os projetos devem ter urlGithub', () => {
    service.projetos().forEach(p => {
      expect(p.urlGithub).toBeTruthy();
    });
  });
});
