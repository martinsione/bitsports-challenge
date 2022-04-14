import { render, screen } from "@testing-library/react";

import Nav from "components/Nav";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("should render text by default a heading", () => {
    render(<Nav />);
    const heading = screen.getByRole("heading", {
      name: "People of Star Wars",
    });

    expect(heading).toBeInTheDocument();
  });

  it("should render given text", () => {
    render(<Nav label="Texto de prueba" />);
    const heading = screen.getByRole("heading", {
      name: "Texto de prueba",
    });

    expect(heading).toBeInTheDocument();
  });

  it("should render a link to home", () => {
    render(<Nav showHome />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });

  it("should have a button to toggle theme", () => {
    render(<Nav />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
