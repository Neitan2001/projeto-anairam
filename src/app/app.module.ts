import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempoNamoroComponent } from './tempo-namoro/tempo-namoro.component';
import { ContadorCardComponent } from './contador-card/contador-card.component';
import { ContagemRegressivaComponent } from './contagem-regressiva/contagem-regressiva.component';
import { LinhaTemporalComponent } from './linha-temporal/linha-temporal.component';
import { BolaLinhaTempoComponent } from './linha-temporal/bola-linha-tempo/bola-linha-tempo.component';
import { EventoDetalheComponent } from './linha-temporal/evento-detalhe/evento-detalhe.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    TempoNamoroComponent,
    ContadorCardComponent,
    ContagemRegressivaComponent,
    LinhaTemporalComponent,
    BolaLinhaTempoComponent,
    EventoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
