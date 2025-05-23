import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-tempo-namoro',
  templateUrl: './tempo-namoro.component.html',
  styleUrls: ['./tempo-namoro.component.css']
})
export class TempoNamoroComponent implements OnInit, OnDestroy {
  private inicio = moment('2021-02-12T00:00:00');
  private timerSub!: Subscription;
  private simulatedNow!: moment.Moment;

  anosTotal = 0;
  diasTotal = 0;
  horas = 0;
  minutos = 0;
  segundos = 0;

  ngOnInit(): void {
    this.simulatedNow = moment();
    this.timerSub = interval(1000).subscribe(() => this.atualizaContador());
    this.atualizaContador();
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }

  private atualizaContador(): void {
    this.simulatedNow.add(1, 'seconds');
    const now = this.simulatedNow;

    const anos    = now.diff(this.inicio, 'years');
    const refAnos = this.inicio.clone().add(anos, 'years');

    const dias    = now.diff(refAnos, 'days');
    const refDias = refAnos.clone().add(dias, 'days');

    const horas   = now.diff(refDias, 'hours');
    const refHoras= refDias.clone().add(horas, 'hours');

    const min    = now.diff(refHoras, 'minutes');
    const refMin = refHoras.clone().add(min, 'minutes');

    const seg    = now.diff(refMin, 'seconds');

    this.anosTotal = anos;
    this.diasTotal = dias;
    this.horas     = horas;
    this.minutos   = min;
    this.segundos  = seg;
  }
}
