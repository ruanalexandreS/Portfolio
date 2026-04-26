

import { Injectable, signal, effect } from '@angular/core';

export type Tema = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class TemaService {
  private readonly _tema = signal<Tema>(this.carregarTema());
  readonly tema = this._tema.asReadonly();

  constructor() {
    effect(() => {
      const t = this._tema();
      document.documentElement.classList.toggle('light', t === 'light');
      localStorage.setItem('tema', t);
    });
  }

  alternar() {
    this._tema.set(this._tema() === 'dark' ? 'light' : 'dark');
  }

  private carregarTema(): Tema {
    const saved = localStorage.getItem('tema');
    return saved === 'light' ? 'light' : 'dark';
  }
}
