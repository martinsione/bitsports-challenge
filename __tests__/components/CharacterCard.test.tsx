import { render, screen } from "@testing-library/react";

import CharacterCard from "components/CharacterCard";
import "@testing-library/jest-dom";

describe("CharacterCard", () => {
  it("should render a name a homeworld and a species", () => {
    render(
      <CharacterCard
        homeworld="Buenos Aires"
        name="Luke Skywalker"
        species="Human"
      />
    );
    const heading = screen.getByRole("heading", {
      name: "Luke Skywalker",
    });
    expect(heading).toBeInTheDocument();

    const species = screen.getByText("Human from Buenos Aires");
    expect(species).toBeInTheDocument();
  });
});
