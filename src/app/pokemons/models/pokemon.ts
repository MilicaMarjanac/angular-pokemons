export interface ApiResult {
  count: number;
  next: string;
  previous: string;
  results: NameUrl[];
}

export interface NameUrl {
  name: string;
  url: string;
}

interface Ability {
  ability: Partial<NameUrl>;
  is_hidden: boolean;
  slot: number;
}

interface GameIndices {
  game_index: number;
  version: NameUrl;
}

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: NameUrl;
  version_group: NameUrl;
}

interface Move {
  move: NameUrl;
  version_group_details: VersionGroupDetails[];
}

interface DreamWorld {
  front_default: string;
  front_female: string;
}

interface Home {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface OfficialArtwork {
  front_default: string;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  officialartwork: OfficialArtwork;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
  versions: {};
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: NameUrl;
}

interface Type {
  slot: number;
  type: NameUrl;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrl[];
  game_indices: GameIndices[];
  height: number;
  held_items: [];
  id: number;
  is_default: true;
  local_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: NameUrl;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
