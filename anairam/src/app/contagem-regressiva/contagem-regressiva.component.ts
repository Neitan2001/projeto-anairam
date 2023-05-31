import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-contagem-regressiva',
  templateUrl: './contagem-regressiva.component.html',
  styleUrls: ['./contagem-regressiva.component.css']
})
export class ContagemRegressivaComponent implements OnInit {

  constructor() { }

  dataAtual: Date = new Date();
  segundosFaltando: number = 60 - this.dataAtual.getSeconds();
  minutosFaltando: number = 60 - this.dataAtual.getMinutes();
  horasFaltando: number = 23 - this.dataAtual.getHours();

  anoInicio: number = 2021;
  dataMoment = moment();
  anosTotal: number = this.dataMoment.diff(moment('2021-02-12'), 'years');
  diasFaltando: number = moment(`${this.anoInicio + this.anosTotal + 1}-02-12`).diff(this.dataMoment, 'days');

  ngOnInit(): void {
    setInterval(() => {
      this.diminuiTempo();
    }, 1000);
  }

  private diminuiTempo() {
    
    if (this.segundosFaltando == 0) {
      this.segundosFaltando = 59;
      if (this.minutosFaltando == 1) {
        this.minutosFaltando = 59;
        if (this.horasFaltando == 0) {
          this.horasFaltando = 23;
          this.diasFaltando --;
        } else {
          this.horasFaltando --;
        }
      } else {
        this.minutosFaltando --;
      }
    } else {
      this.segundosFaltando --;
    }
  }

}
