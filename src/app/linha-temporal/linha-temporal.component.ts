import { Component, OnInit } from '@angular/core';
import { EventService, Evento } from '../event.service';

@Component({
  selector: 'app-linha-temporal',
  templateUrl: './linha-temporal.component.html',
  styleUrls: ['./linha-temporal.component.css']
})
export class LinhaTemporalComponent implements OnInit {
  eventos: Evento[] = [];
  selectedEvent: Evento | null = null;
  hoveredIndex: number | null = null;
  lastSelectedIndex: number | null = null;

  constructor(private eventService: EventService) { }

  selectEvent(event: Evento, index: number) {
    this.selectedEvent = event;
    this.lastSelectedIndex = index;
  }

  onCloseDetail() {
    this.selectedEvent = null;
    setTimeout(() => {
      if (this.lastSelectedIndex !== null) {
        const el = document.getElementById('marker-' + this.lastSelectedIndex);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
      }
    }, 100);
  }

  ngOnInit(): void {
    this.eventService.getEvents()
      .subscribe(events => this.eventos = events);
  }
}