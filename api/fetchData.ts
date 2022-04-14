import type { Character } from "types";

async function getPeople(page = 1) {
  try {
    const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
    const data = await response.json();
    return data;
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

export async function getCharacters(page: number) {
  const people = await getPeople(page);

  return Promise.all([getHomeworld(people.results), getSpecies(people.results)])
    .then(([homeworlds, species]) => {
      people.results = people.results.map(
        (character: Character, index: number) => ({
          ...character,
          homeworld: homeworlds[index],
          species: species[index],
        })
      );
      return people;
    })
    .catch((err) => err);
}

async function getVehicle(vehicles: string[]) {
  if (!vehicles.length) return [];
  return Promise.all(
    vehicles.map(async (vehicle: string) => {
      const response = await fetch(vehicle);
      const data = await response.json();
      return data.name;
    })
  );
}

export async function getCharacter(id: number) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data = await response.json();
    const vehicles = await getVehicle(data.vehicles);
    data.vehicles = vehicles;
    return data;
  } catch (err) {
    throw new Error("Error fetching people");
  }
}
