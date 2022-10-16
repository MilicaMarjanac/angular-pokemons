import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './pages/pokemons-list/pokemons-list';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { AuthGuard } from '../auth/services/auth.guard';

const routes: Routes = [
    {
      path: 'home',
      component: PokemonsListComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: ':name',
          component: PokemonDetailsComponent,
          canActivate: [AuthGuard],
        },]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
