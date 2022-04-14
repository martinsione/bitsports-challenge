import Link from "next/link";

import ThemeButton from "./ThemeButton";

interface Props {
  showHome?: boolean;
  label?: string;
}
export default function CharacterDetail({
  label = "People of Star Wars",
  showHome = false,
}: Props) {
  return (
    <nav className="flex h-[54px] w-full items-center justify-between bg-[#121212] px-6 font-bold text-white dark:bg-neutral-800">
      {showHome && (
        <Link href="/">
          <a>
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M244 400L100 256l144-144M120 256h292"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
              />
            </svg>
          </a>
        </Link>
      )}
      <h1 className="mx-auto text-[17px]">{label}</h1>
      <ThemeButton />
    </nav>
  );
}
