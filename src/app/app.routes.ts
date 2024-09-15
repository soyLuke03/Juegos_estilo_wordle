import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LolWordleGameComponent } from './games/lol-wordle-game/lol-wordle-game';
import { BlackJackComponent } from './games/black-jack/black-jack.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home/LOL/play/Encontrar_el_campeon',
    component: LolWordleGameComponent,
  },
  {
    path: 'home/CASINO/play/Black_Jack',
    component: BlackJackComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
