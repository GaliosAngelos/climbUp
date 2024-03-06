import React from "react";
import { View } from "react-native";
import { render } from "@testing-library/react-native";
import RoutesList from "../../components/lists/RoutesList";

describe("RoutesList Component", () => {
  it("renders RouteBox components with provided routes data", () => {
    // Preparation
    const routes = [
      { id: 1, color: "red", level_of_difficulty: "hard", line_number: 1, route_name: "Route 1", sector: "Sector A", tilt: "Vertical" },
      { id: 2, color: "blue", level_of_difficulty: "medium", line_number: 2, route_name: "Route 2", sector: "Sector B", tilt: "Overhang" },
    ];
    const expand = jest.fn();
    const hall_name = "Hall A";

    // Action
    const { getAllByTestId } = render(<RoutesList routes={routes} expand={expand} hall_name={hall_name} />);
    const routeBoxes = getAllByTestId("route-box");

    // Expected Result
    expect(routeBoxes.length).toBe(routes.length);
  });
});