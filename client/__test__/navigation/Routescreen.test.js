import React from "react";
import { render } from "@testing-library/react-native";
import RoutesScreen from "../navigation/Routenscreen";

describe("RoutesScreen Component", () => {
  it("should render the RoutesScreen component without errors", () => {
    const { getByText } = render(<RoutesScreen />);
    expect(getByText("Routes Screen")).toBeDefined();
  });
});

