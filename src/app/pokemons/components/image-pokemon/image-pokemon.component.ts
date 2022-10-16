import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-image-pokemon',
  templateUrl: './image-pokemon.component.html',
  styleUrls: ['./image-pokemon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePokemonComponent implements OnInit {
  @Input() pokemonImage: string;

  constructor() { }

  ngOnInit(): void { }
}
