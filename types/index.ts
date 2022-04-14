export interface Character {
  name: string;
  homeworld: string;
  species: string;
  [key: string]: any;
}

export interface CharacterDetail {
  name: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  birth_year: string;
  vehicles: string[];
}
