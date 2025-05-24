import { Component, OnInit } from '@angular/core';

interface Evento {
  date: string;
  label: string;
}

@Component({
  selector: 'app-linha-temporal',
  templateUrl: './linha-temporal.component.html',
  styleUrls: ['./linha-temporal.component.css']
})
export class LinhaTemporalComponent implements OnInit {
  eventos: Evento[] = [];

  ngOnInit(): void {
    const totalEvents = 20; // ajuste quantos quiser testar
    for (let i = 1; i <= totalEvents; i++) {
      this.eventos.push({
        // só para exemplo, datas fictícias
        date: `${i.toString().padStart(2, '0')}/01/2021`,
        label: `Encontro ${i}`
      });
    }
  }
}
