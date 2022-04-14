import type { CharacterDetail } from "types";

import { useQuery } from "react-query";
import { useRouter } from "next/router";
import Head from "next/head";

import Nav from "components/Nav";
import LoadingMessage from "components/LoadingMessage";
import ErrorMessage from "components/ErrorMessage";
import CharacterDetailBadge from "components/CharacterDetailBadge";
import { getCharacter } from "api/fetchData";

export default function Character() {
  const router = useRouter();
  const id = Number(router.query.id?.toString());

  const {
    data: character,
    isLoading,
    isError,
  } = useQuery<CharacterDetail>(["character", id], () => getCharacter(id));

  return (
    <>
      {character?.name && (
        <Head>
          <title>{character.name}</title>
        </Head>
      )}
      <Nav showHome label={character?.name} />
      {isError && <ErrorMessage />}
      {isLoading && <LoadingMessage />}
      {character && (
        <div className="mx-auto max-w-4xl px-6">
          <div className="capitalize">
            <p className="mt-6 text-[17px] font-bold text-[#333333] dark:text-gray-100">
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
              <p className="text-[17px] font-bold text-[#333333] dark:text-gray-100">
                Vehicles
              </p>
              {character.vehicles.map((vehicle: string) => (
                <CharacterDetailBadge key={vehicle} label={vehicle} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
