import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import RouteFilter from "../../../../components/sections/dashboard/climbing/RouteFilter";

describe("RouteFilter Component", () => {
  it("updates routeName state when route input changes", () => {
    const setRoutes = jest.fn();
    const hall_name = "TestHall";

    const { getByPlaceholderText } = render(
      <RouteFilter setRoutes={setRoutes} hall_name={hall_name} />
    );

    const routeInput = getByPlaceholderText("Route");

    fireEvent.changeText(routeInput, "Test Route");

    expect(routeInput.props.value).toBe("Test Route");
  });

  it("fetches filtered routes when input values change", () => {
    const setRoutes = jest.fn();
    const hall_name = "TestHall";

    const { getByPlaceholderText } = render(
      <RouteFilter setRoutes={setRoutes} hall_name={hall_name} />
    );

    const routeInput = getByPlaceholderText("Route");
    const sectorInput = getByPlaceholderText("Sektor");
    const levelInput = getByPlaceholderText("Level");

    fireEvent.changeText(routeInput, "Test Route");
    fireEvent.changeText(sectorInput, "Test Sector");
    fireEvent.changeText(levelInput, "Test Level");

    expect(setRoutes).toHaveBeenCalled();
  });
});