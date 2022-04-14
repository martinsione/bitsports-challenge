import { render, screen } from "@testing-library/react";

import LoadingMessage from "components/LoadingMessage";
import "@testing-library/jest-dom";

describe("Loading", () => {
  it('should render "loading" text', () => {
    render(<LoadingMessage />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("should render an alt for the spinner", () => {
    render(<LoadingMessage />);
    expect(screen.getByAltText("loading gif")).toBeInTheDocument();
  });
});
