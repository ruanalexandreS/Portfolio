/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Injector, runInInjectionContext, ɵChangeDetectionScheduler, ɵEffectScheduler } from '@angular/core';
import { TemaService } from './tema.service';

function criarLocalStorageStub(): Storage {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
    key: (index: number) => Object.keys(store)[index] ?? null,
    get length() { return Object.keys(store).length; }
  } as Storage;
}

describe('TemaService', () => {
  let service: TemaService;

  beforeEach(() => {
    vi.stubGlobal('localStorage', criarLocalStorageStub());
    const injector = Injector.create({
      providers: [
        // effect() no construtor exige um scheduler; um no-op basta pois os
        // testes leem apenas o signal, sem depender da execução do effect
        { provide: ɵChangeDetectionScheduler, useValue: { notify: () => {} } },
        { provide: ɵEffectScheduler, useValue: { add: () => {}, schedule: () => {}, flush: () => {}, remove: () => {} } }
      ]
    });
    service = runInInjectionContext(injector, () => new TemaService());
  });

  it('deve iniciar em dark por padrão', () => {
    expect(service.tema()).toBe('dark');
  });

  it('deve alternar dark → light → dark', () => {
    service.alternar();
    expect(service.tema()).toBe('light');
    service.alternar();
    expect(service.tema()).toBe('dark');
  });
});
