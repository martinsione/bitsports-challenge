import type { Character } from "types";

import { useState, useEffect } from "react";

import People from "components/People";
import getCharacters from "api/fetchData";

export default function Home() {
  const [people, setPeople] = useState<null | Character[]>(null);

  useEffect(() => {
    getCharacters()
      .then((data) => setPeople(data))
      .catch((e: unknown) => console.log(e));
  }, []);

  console.log(people);

  return (
    <div className="space-y-4">
      <nav className="flex h-[54px] items-center justify-center bg-[#121212] font-bold text-white">
        <h1 className="text-[17px]">People of Star Wars</h1>
      </nav>

      {people ? (
        people.map((character) => (
          <People
            key={character.name}
            homeworld={character.homeworld}
            name={character.name}
            species={character.species}
          />
        ))
      ) : (
        <div className="flex items-center justify-center gap-4">
          <p className="text-[17px] font-bold text-[#828282]">Loading</p>
        </div>
      )}
    </div>
  );
}
