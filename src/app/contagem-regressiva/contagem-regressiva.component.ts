import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-contagem-regressiva',
  templateUrl: './contagem-regressiva.component.html',
  styleUrls: ['./contagem-regressiva.component.css']
})
export class ContagemRegressivaComponent implements OnInit, OnDestroy {
  private inicio = moment('2021-02-12T00:00:00');
  private nextAnniversary!: moment.Moment;
  private timerSub!: Subscription;

  private simulationDateIso: string | null = '';
  private simulatedNow!: moment.Moment;

  anosTotal = 0;
  diasFaltando = 0;
  horasFaltando = 0;
  minutosFaltando = 0;
  segundosFaltando = 0;

  ngOnInit(): void {
    this.simulatedNow = this.simulationDateIso
      ? moment(this.simulationDateIso)
      : moment();
    this.computeNextAnniversary();
    this.timerSub = interval(1000).subscribe(() => this.updateCountdown());
    this.updateCountdown();
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }

  private computeNextAnniversary(): void {
    const now = this.simulatedNow;
    const yearsPassed = now.diff(this.inicio, 'years');
    this.anosTotal = yearsPassed;
    this.nextAnniversary = this.inicio.clone().add(yearsPassed + 1, 'years');
  }

  private updateCountdown(): void {
    this.simulatedNow.add(1, 'seconds');
    const now = this.simulatedNow;

    if (now.isAfter(this.nextAnniversary)) {
      this.computeNextAnniversary();
    }

    const diffMs = this.nextAnniversary.diff(now);
    const dur = moment.duration(diffMs);

    const days = Math.floor(dur.asDays());
    dur.subtract(moment.duration(days, 'days'));

    this.diasFaltando    = days;
    this.horasFaltando   = dur.hours();
    this.minutosFaltando = dur.minutes();
    this.segundosFaltando= dur.seconds();
  }
}
