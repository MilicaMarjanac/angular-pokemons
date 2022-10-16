import {
  Component,
  OnInit,
} from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  private name: string;
  public pokemonDetails: Pokemon;
  public pokemonImage: string;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
      if (this.name) {
        this.getPokemonDetails(this.name);
      }
    });
  }

  private getPokemonDetails(name: string) {
    this.pokemonService
      .getPokemonDetails(name)
      .subscribe((pokemon: Pokemon) => {
        this.pokemonDetails = pokemon;
        this.pokemonImage =
          this.pokemonDetails?.sprites.other.home.front_default;
      });
  }
}
