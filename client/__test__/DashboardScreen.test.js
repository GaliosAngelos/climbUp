import React from "react";
import { render } from "@testing-library/react-native";
import DashboardScreen from "../screens/DashboardScreen";

describe("DashboardScreen component", () => {
  test("renders correctly", () => {
    const { getByText } = render(<DashboardScreen />);

    // Check if the main header is rendered
    expect(getByText("Elevate your progress!")).toBeTruthy();

    // Check if the climb count and best level are rendered
    expect(getByText("125 Climbs")).toBeTruthy();
    expect(getByText("6+ best Level")).toBeTruthy();

    // Check if the RouteLogFilterButtons component is rendered
    expect(getByText("Your Logs")).toBeTruthy(); // Adjust this based on your button text

    // Add more checks for other components if needed
  });
});
