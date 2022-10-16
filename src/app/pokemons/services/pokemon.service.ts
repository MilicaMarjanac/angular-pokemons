import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResult, Pokemon } from '../models/pokemon';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  private url = 'https://pokeapi.co/api/v2/pokemon'; //https://pokeapi.co/docs/v2#info
  private limit = 15;

  constructor(private http: HttpClient) { }

  public getAllPokemons(): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${this.url}?${this.limit}&offset=0`);
  }

  public getPokemonDetails(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + '/' + pokemonName);
  }
}
