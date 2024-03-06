
import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import DashboardScreen from "./DashboardScreen";

describe("DashboardScreen Component", () => {
  it("should render DashboardScreen component with correct content", async () => {
    const { getByText } = render(<DashboardScreen />);
    // Check if loading text is displayed initially
    expect(getByText("Loading...")).toBeDefined();

    // Wait for data to be fetched
    await waitFor(() => expect(getByText("Climbs")).toBeDefined());

    // Check if statistics are displayed
    expect(getByText("Elevate your progress!")).toBeDefined();
    expect(getByText("Climbs")).toBeDefined();
    expect(getByText("best Level")).toBeDefined();
  });

  // Add more test cases for interaction behaviors if needed
});

