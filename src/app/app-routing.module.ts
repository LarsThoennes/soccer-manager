import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesCurrentComponent } from './games-current/games-current.component';
import { GameNextComponent } from './game-next/game-next.component';
import { PremierLeagueComponent } from './premier-league/premier-league.component';

const routes: Routes = [
  {path: '', component: GameNextComponent},
  {path: 'Premierleauge', component: GamesCurrentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
