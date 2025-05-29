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

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents()
      .subscribe(events => this.eventos = events);
  }
}