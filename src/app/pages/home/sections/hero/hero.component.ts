import { ChangeDetectionStrategy, Component, Input, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService, Textos, Idioma } from '../../../../services/idioma.service';

/* Mapa fechado idioma -> PDF: o caminho nunca é montado por concatenação
   do valor do idioma (evita path traversal); chave fora do mapa cai no PT. */
const CURRICULOS: Record<Idioma, string> = {
  PT: '/curriculo-pt.pdf',
  EN: '/curriculo-en.pdf',
  ES: '/curriculo-es.pdf'
};

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  private idiomaService = inject(IdiomaService);

  @Input({ required: true }) t!: Textos;
  @Input() textoExibido: string = '';
  @Input({ required: true }) scrollPara!: (id: string) => void;

  /* Fallback defensivo: o tipo Idioma é fechado, mas se um valor fora do
     mapa chegar em runtime, PT evita um href quebrado (404 silencioso). */
  private idiomaCurriculo = computed<Idioma>(() => {
    const idioma = this.idiomaService.idioma();
    return idioma in CURRICULOS ? idioma : 'PT';
  });

  urlCurriculo = computed(() => CURRICULOS[this.idiomaCurriculo()]);
  nomeCurriculo = computed(() => `Ruan-Alexandre-CV-${this.idiomaCurriculo()}.pdf`);
}