import type { Character } from "types";

async function getPeople() {
  try {
    const response = await fetch(`http://swapi.dev/api/people`);
    const data = await response.json();
    return data.results;
  } catch (err) {
    throw new Error("Error fetching people");
  }
}

async function getHomeworld(characters: Character[]) {
  const homeworlds = await Promise.all(
    characters.map(async (character) => {
      const response = await fetch(character.homeworld);
      const data = await response.json();
      return data.name;
    })
  );
  return homeworlds;
}

async function getSpecies(characters: Character[]) {
  const species = await Promise.all(
    characters.map(async (character) => {
      // Species that are human, return an empty array
      if (!character.species.length) {
        return "Human";
      }
      const response = await fetch(character.species);
      const data = await response.json();
      return data.name;
    })
  );
  return species;
}

export default async function getCharacters() {
  const people = await getPeople();

  return Promise.all([getHomeworld(people), getSpecies(people)])
    .then(([homeworlds, species]) =>
      people.map((character: Character, index: number) => ({
        ...character,
        homeworld: homeworlds[index],
        species: species[index],
      }))
    )
    .catch((err) => err);
}
