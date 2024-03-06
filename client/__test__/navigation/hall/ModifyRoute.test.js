import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ModifyRoute from "../../../navigation/hall/ModifyRoute";

describe("ModifyRoute Component", () => {
  it("should render ModifyRoute component with correct content for creating a new route", () => {
    const { getByText, getByPlaceholderText } = render(<ModifyRoute />);

    expect(getByText("Create a new Route.")).toBeDefined();
    expect(getByPlaceholderText("Routename")).toBeDefined();
    expect(getByPlaceholderText("Sektor")).toBeDefined();
    expect(getByPlaceholderText("Line")).toBeDefined();
    expect(getByPlaceholderText("Difficulty")).toBeDefined();
    expect(getByText("Color")).toBeDefined();
    expect(getByText("Create Route")).toBeDefined();
  });

  it("should render ModifyRoute component with correct content for updating an existing route", () => {
    const routeParams = {
      color: "blue",
      levelOfDifficulty: "5.10b",
      lineNumber: "3",
      routeName: "Test Route",
      Sector: "A",
      Tilt: true,
    };

    const { getByText, getByDisplayValue } = render(
      <ModifyRoute route={{ params: routeParams }} />
    );

    expect(getByText("Update or Delete a Route.")).toBeDefined();
    expect(getByDisplayValue("Test Route")).toBeDefined();
    expect(getByDisplayValue("A")).toBeDefined();
    expect(getByDisplayValue("3")).toBeDefined();
    expect(getByDisplayValue("5.10b")).toBeDefined();
    expect(getByText("Color")).toBeDefined();
    expect(getByText("Delete Route")).toBeDefined();
    expect(getByText("Update Route")).toBeDefined();
  });

  // Add more test cases for interaction behaviors if needed
});
