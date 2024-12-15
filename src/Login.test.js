import { describe } from "yargs";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";

describe("Test Login Component", () => {
  test("render form with 1 button", () => {
    render(<Login />);
      const button = screen.findAllByRole();
      expect(buttonList).toHaveLength
  });
});
