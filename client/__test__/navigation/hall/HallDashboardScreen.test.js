import React from "react";
import { render } from "@testing-library/react-native";
import HallDashboardScreen from "./HallDashboardScreen";

describe("HallDashboardScreen Component", () => {
  it("should render HallDashboardScreen component with correct content", () => {
    const { getByText } = render(<HallDashboardScreen />);

    expect(getByText("Elevate your progress!")).toBeDefined();
    expect(getByText("125")).toBeDefined();
    expect(getByText("Climbs")).toBeDefined();
    expect(getByText("6+")).toBeDefined();
    expect(getByText("best Level")).toBeDefined();
  });
});
