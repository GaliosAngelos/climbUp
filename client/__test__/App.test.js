import React from "react";
import { render } from "@testing-library/react-native";
import App from "./App";

describe("App Component", () => {
  it("should render the App component without errors", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("status-bar")).toBeDefined();
    expect(getByTestId("safe-area-provider")).toBeDefined();
    expect(getByTestId("main-container")).toBeDefined();
  });
});
