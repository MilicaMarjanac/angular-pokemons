import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsListComponent } from './pages/pokemons-list/pokemons-list';
import { ImagePokemonComponent } from './components/image-pokemon/image-pokemon.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonDetailsComponent,
    ImagePokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatSidenavModule,
  ],
})
export class PokemonsModule { }
