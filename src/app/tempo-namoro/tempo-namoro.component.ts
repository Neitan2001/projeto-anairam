import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tempo-namoro',
  templateUrl: './tempo-namoro.component.html',
  styleUrls: ['./tempo-namoro.component.css']
})
export class TempoNamoroComponent implements OnInit {

  constructor() { }

  anoInicio: number = 2021;
  inicioNamoro: Date  = new Date("Feb 12, 2021 00:00:00");
  dataAtual: Date = new Date();

  segundosTotal: number = this.dataAtual.getTime() - this.inicioNamoro.getTime();
  segundosAtual: number = this.dataAtual.getSeconds();
  minutosAtual: number = this.dataAtual.getMinutes();
  horasAtual: number = this.dataAtual.getHours();
  dataMoment = moment();
  anosTotal: number = this.dataMoment.diff(moment('2021-02-12'), 'years');
  diasTotal: number = this.dataMoment.diff(moment(`${this.anoInicio + this.anosTotal}-02-12`), 'days');

  ngOnInit(): void {
    setInterval(() => {
      this.aumentaTempo();
    }, 1000);
  }

  private aumentaTempo() {
    this.segundosTotal ++;
    this.dataMoment = moment();
    this.anosTotal = this.dataMoment.diff(moment('2021-02-12'), 'years');
    if (this.segundosAtual >= 59) {
      this.segundosAtual = 0;
      if (this.minutosAtual >= 59) {
        this.minutosAtual = 0;
        if (this.horasAtual >= 23) {
          this.horasAtual = 0;
          this.diasTotal ++;
        } else {
          this.horasAtual ++;
        }
      } else {
        this.minutosAtual ++;
      }
    } else {
      this.segundosAtual ++;
    }
  }

}
