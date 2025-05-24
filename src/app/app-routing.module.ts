import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContagemRegressivaComponent } from './contagem-regressiva/contagem-regressiva.component';
import { TempoNamoroComponent } from './tempo-namoro/tempo-namoro.component';
import { LinhaTemporalComponent } from './linha-temporal/linha-temporal.component';

const routes: Routes = [
  {path: '', redirectTo: '/tempo-namoro', pathMatch: 'full'},
  {path: 'tempo-namoro', component: TempoNamoroComponent},
  { path: 'contagem-regressiva', component: ContagemRegressivaComponent},
  { path: 'linha-temporal', component: LinhaTemporalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
