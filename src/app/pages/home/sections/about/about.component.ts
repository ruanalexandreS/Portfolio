import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../../../services/idioma.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private idiomaService = inject(IdiomaService);
  get t() { return this.idiomaService.t(); }
}
