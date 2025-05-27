import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface EventoDetalhe {
  date: string;
  label: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent {
  @Input() event!: EventoDetalhe;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}