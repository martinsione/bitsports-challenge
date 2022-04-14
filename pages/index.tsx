import type { Character } from "types";

import { useState, useEffect } from "react";
import Link from "next/link";

import People from "components/People";
import Nav from "components/Nav";
import LoadingMessage from "components/LoadingMessage";
import ErrorMessage from "components/ErrorMessage";
import { getCharacters } from "api/fetchData";

export default function Home() {
  const [people, setPeople] = useState<null | "Error" | Character[]>(null);

  useEffect(() => {
    getCharacters()
      .then((data) => setPeople(data))
      .catch(() => setPeople("Error"));
  }, []);

  const getCharacterId = (url: string) => Number(url.split("/").slice(-2)[0]);

  if (people === "Error") {
    return (
      <>
        <Nav />
        <div className="flex justify-center">
          <ErrorMessage />
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />

      {people ? (
        people.map((character) => (
          <Link
            key={character.name}
            href={`/character/${getCharacterId(character.url)}`}
          >
            <a>
              <People
                homeworld={character.homeworld}
                name={character.name}
                species={character.species}
              />
            </a>
          </Link>
        ))
      ) : (
        <div className="flex justify-center">
          <LoadingMessage />
        </div>
      )}
    </>
  );
}
