import { Injector, runInInjectionContext } from '@angular/core';
import { describe, it, expect, beforeEach } from 'vitest';
import { IdiomaService } from './idioma.service';

describe('IdiomaService', () => {
  let service: IdiomaService;

  beforeEach(() => {
    const injector = Injector.create({ providers: [] });
    service = runInInjectionContext(injector, () => new IdiomaService());
  });

  it('deve iniciar em PT', () => {
    expect(service.idioma()).toBe('PT');
    expect(service.t().menu.inicio).toBe('Início');
  });

  it('deve ciclar PT → EN → ES → PT', () => {
    service.alternarIdioma();
    expect(service.idioma()).toBe('EN');
    service.alternarIdioma();
    expect(service.idioma()).toBe('ES');
    service.alternarIdioma();
    expect(service.idioma()).toBe('PT');
  });

  it('deve sincronizar t() ao trocar idioma', () => {
    service.alternarIdioma();
    expect(service.t().menu.inicio).toBe('Home');
    service.alternarIdioma();
    expect(service.t().menu.inicio).toBe('Inicio');
  });
});
