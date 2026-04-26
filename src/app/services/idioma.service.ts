import { Injectable, computed, signal } from '@angular/core';
import { Idioma, Textos } from '../i18n/types';
import { TEXTOS } from '../i18n';

export type { Idioma, Textos };
export type {
  MenuTextos, HeroTextos, SobreTextos, TitulosTextos,
  ProjetosTextos, HabilidadesTextos, CarreiraTextos,
  EducacaoTextos, CertificadosTextos, ContatoTextos,
  FooterTextos, ExperienciaCarreira, ItemEducacao,
  ItemCertificado, ItemProjetoI18n, CategoriaHabilidade
} from '../i18n/types';

@Injectable({ providedIn: 'root' })
export class IdiomaService {
  private readonly _idioma = signal<Idioma>('PT');
  readonly idioma = this._idioma.asReadonly();
  readonly t = computed<Textos>(() => TEXTOS[this._idioma()]);

  alternarIdioma() {
    const map: Record<Idioma, Idioma> = { PT: 'EN', EN: 'ES', ES: 'PT' };
    this._idioma.set(map[this._idioma()]);
  }

  getIdioma(): Idioma {
    return this._idioma();
  }
}
