import { render } from "@testing-library/react";
import Home from "./pages";

describe("website", () => {
  it("doesn't crash", () => {
    render(<Home />);
  });
});
