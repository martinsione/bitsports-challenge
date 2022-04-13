import type { Character } from "../types";

export default function People({ homeworld, name, species }: Character) {
  return (
    <div className="ml-6 border-b">
      <div className="flex items-center justify-between border-b py-2">
        <div>
          <h2 className="font-bold text-[#333333]">{name}</h2>
          <p className="text-[#828282]">
            {species} from {homeworld}
          </p>
        </div>
        <div className="mr-6">
          <svg
            fill="none"
            height="12"
            viewBox="0 0 8 12"
            width="8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
