import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ClimbingHallScreen from "./ClimbingHallScreen";

describe("ClimbingHallScreen Component", () => {
  it("should render ClimbingHallScreen component with correct content", () => {
    const { getByText, getByPlaceholderText } = render(<ClimbingHallScreen />);

    expect(getByText("Where every climb feels like home.")).toBeDefined();
    expect(getByPlaceholderText("Hallname, City")).toBeDefined();
  });

  // Add more test cases for interaction behaviors if needed
});
