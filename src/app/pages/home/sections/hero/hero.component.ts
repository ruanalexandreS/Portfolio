import { ChangeDetectionStrategy, Component, Input, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService, Textos, Idioma } from '../../../../services/idioma.service';

/* Mapa fechado idioma -> PDF: o caminho nunca é montado por concatenação
   do valor do idioma (evita path traversal); chave fora do mapa cai no PT. */
const CURRICULOS: Record<Idioma, string> = {
  PT: 'assets/curriculo-pt.pdf',
  EN: 'assets/curriculo-en.pdf',
  ES: 'assets/curriculo-es.pdf'
};

/* Nome do arquivo salvo pelo recrutador — não segue sufixo único (EN usa
   "Resume"), por isso é mapa e não concatenação. Hífen, sem acento e sem
   espaço: evita %20 e corrupção em ATS antigos. */
const NOMES_CV: Record<Idioma, string> = {
  PT: 'Ruan-Alexandre-CV.pdf',
  EN: 'Ruan-Alexandre-Resume-EN.pdf',
  ES: 'Ruan-Alexandre-CV-ES.pdf'
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
  /* O ?? é rede de segurança para drift entre os dois mapas: idiomaCurriculo
     valida a chave contra CURRICULOS, não contra NOMES_CV. Sem ele, uma
     chave ausente viraria undefined, o atributo download sumiria e o PDF
     abriria no navegador em vez de baixar. */
  nomeCurriculo = computed(() => NOMES_CV[this.idiomaCurriculo()] ?? NOMES_CV.PT);
}