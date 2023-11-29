import { render, screen } from "@testing-library/react";

import App from "./App";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("should render component", () => {
    const component = render(<App />);

    const title = component.getByText("ESTO NO");

    expect(title).toBe("Cualquier");
    // expect(component).toBeDefined();
  });
});
