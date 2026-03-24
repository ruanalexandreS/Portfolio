import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  @Input() t: any;
  @Input() experiencias: any[] = [];
}