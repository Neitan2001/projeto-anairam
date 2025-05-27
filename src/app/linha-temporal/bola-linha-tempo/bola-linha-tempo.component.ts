import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bola-linha-tempo',
  templateUrl: './bola-linha-tempo.component.html',
  styleUrls: ['./bola-linha-tempo.component.css']
})
export class BolaLinhaTempoComponent {
  /** data a exibir */
  @Input() date!: string;
  /** texto do evento */
  @Input() label!: string;
  /** posição do texto em relação à bola: 'top' ou 'bottom' */
  @Input() position: 'top' | 'bottom' = 'bottom';
  /** quando true, a bolinha fica maior */
  @Input() highlight = false;
}
