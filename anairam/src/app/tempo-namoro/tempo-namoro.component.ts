import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempo-namoro',
  templateUrl: './tempo-namoro.component.html',
  styleUrls: ['./tempo-namoro.component.css']
})
export class TempoNamoroComponent implements OnInit {

  constructor() { }

  inicioNamoro: Date  = new Date("Feb 12, 2021 00:00:00");
  dataAtual: Date = new Date();

  segundos: number = Math.round((this.dataAtual.getTime() - this.inicioNamoro.getTime())/1000);
  minutos: number = Math.round(this.segundos/60);

  ngOnInit(): void {
    setInterval(() => {
      this.aumentaTempo();
    }, 1000);
  }

  private aumentaTempo() {
    this.segundos ++;
  }

}
