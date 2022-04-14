import type { CharacterDetail } from "types";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Nav from "components/Nav";
import ErrorMessage from "components/ErrorMessage";
import CharacterDetailBadge from "components/CharacterDetailBadge";
import { getCharacter } from "api/fetchData";

export default function Character() {
  const router = useRouter();
  const id = Number(router.query.id?.toString());
  const [character, setCharacter] = useState<null | "Error" | CharacterDetail>(
    null
  );

  useEffect(() => {
    if (id) {
      getCharacter(id)
        .then((data) => setCharacter(data))
        .catch(() => setCharacter("Error"));
    }
  }, [id]);

  if (character === "Error") {
    return (
      <>
        <Nav showHome />
        <div className="flex justify-center">
          <ErrorMessage />
        </div>
      </>
    );
  }

  return (
    <>
      <Nav showHome label={character?.name} />
      {character ? (
        <div className="px-6">
          <div className="capitalize">
            <p className="mt-6 text-[17px] font-bold text-[#333333]">
              General Information
            </p>
            <CharacterDetailBadge
              label="Eye Color"
              value={character.eye_color}
            />
            <CharacterDetailBadge
              label="Hair Color"
              value={character.hair_color}
            />
            <CharacterDetailBadge
              label="Skin Color"
              value={character.skin_color}
            />
            <CharacterDetailBadge
              label="Birth Year"
              value={character.birth_year}
            />
          </div>
          {!!character.vehicles.length && (
            <div className="mt-6 font-bold text-[#333333]">
              <p className="text-[17px] font-bold text-[#333333]">Vehicles</p>
              {character.vehicles.map((vehicle) => (
                <CharacterDetailBadge key={vehicle} label={vehicle} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <p className="text-[17px] font-bold text-[#828282]">Loading</p>
        </div>
      )}
    </>
  );
}
