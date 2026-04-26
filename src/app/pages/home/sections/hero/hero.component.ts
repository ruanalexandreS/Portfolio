import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Textos } from '../../../../services/idioma.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @Input({ required: true }) t!: Textos;
  @Input() textoExibido: string = '';
  @Input({ required: true }) scrollPara!: (id: string) => void;
}