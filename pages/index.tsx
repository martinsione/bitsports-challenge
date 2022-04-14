import type { Character } from "types";

import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import Link from "next/link";

import People from "components/People";
import Nav from "components/Nav";
import LoadingMessage from "components/LoadingMessage";
import ErrorMessage from "components/ErrorMessage";
import { getCharacters } from "api/fetchData";

export default function Home() {
  const { data, fetchNextPage, hasNextPage, isError, isLoading } =
    useInfiniteQuery(
      "people",
      ({ pageParam = 1 }) => getCharacters(pageParam),
      {
        refetchIntervalInBackground: true,
        refetchInterval: 1000,
        getNextPageParam: (lastPage) => {
          if (lastPage?.next) {
            return Number(lastPage.next.split("=")[1]);
          }
          return false;
        },
      }
    );

  const people =
    data?.pages.reduce((prevData, page) => prevData.concat(page.results), []) ??
    [];

  const getCharacterId = (url: string) => Number(url.split("/").slice(-2)[0]);

  return (
    <>
      <Nav />
      {isError && <ErrorMessage />}
      {people && (
        <InfiniteScroll
          hasMore={hasNextPage || isLoading}
          loadMore={() => fetchNextPage()}
          loader={<LoadingMessage key={0} />}
          pageStart={1}
        >
          {people.map((character: Character) => (
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
          ))}
        </InfiniteScroll>
      )}
    </>
  );
}
