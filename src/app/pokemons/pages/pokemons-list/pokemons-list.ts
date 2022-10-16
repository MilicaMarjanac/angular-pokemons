import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ApiResult, NameUrl } from '../../models/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.html',
  styleUrls: ['./pokemons-list.css'],
})
export class PokemonsListComponent implements OnInit {
  public pokemons: NameUrl[] = [];
  public url: string;
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.url = window.location.pathname;
    });
    this.getAllPokemons();
  }

 private getAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe((res: ApiResult) => {
      this.pokemons = res.results;
    });
  }

  public get isHome(): boolean {
    return this.url === '/home';
  }
}
