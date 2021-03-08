import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerStatisticTableComponent } from './player-statistic-table/player-statistic-table.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerStatisticTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
