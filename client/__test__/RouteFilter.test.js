import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import RouteFilter from "../components/sections/dashboard/climbing/RouteFilter";
import { query } from "../components/request/generalRequest";
import { Climber } from "../components/request/Procedures";

// Mock der `query` Funktion
jest.mock("../components/request/generalRequest", () => ({
  query: jest.fn(),
}));

describe("RouteFilter", () => {
  beforeEach(() => {
    query.mockClear();
  });

  it("sollte eine Route basierend auf dem Routennamen finden", async () => {
    const mockRouteDataByName = [{ route_name: "Lizard_Path" }];
    query.mockResolvedValue({ data: mockRouteDataByName });
    const setRoutes = jest.fn();

    const { getByPlaceholderText } = render(<RouteFilter setRoutes={setRoutes} />);
    fireEvent.changeText(getByPlaceholderText("Route"), "Lizard_Path");

    await waitFor(() => {
      expect(query).toHaveBeenCalledWith(Climber.get_routes_by_route_name.call, ["Lizard_Path"]);
      expect(setRoutes).toHaveBeenCalledWith(mockRouteDataByName);
    });
  });

  it("sollte Routen basierend auf dem Sektor finden", async () => {
    const mockRouteDataBySector = [{ route_name: "Sector_1_Route" }];
    query.mockResolvedValue({ data: mockRouteDataBySector });
    const setRoutes = jest.fn();

    const { getByPlaceholderText } = render(<RouteFilter setRoutes={setRoutes} />);
    fireEvent.changeText(getByPlaceholderText("Sektor"), "A");

    await waitFor(() => {
      expect(query).toHaveBeenCalledWith(Climber.get_routes_by_sector.call, ["A"]);
      expect(setRoutes).toHaveBeenCalledWith(mockRouteDataBySector);
    });
  });

  it("sollte Routen basierend auf dem Schwierigkeitsgrad finden", async () => {
    const mockRouteDataByDifficulty = [{ route_name: "Difficult_Route" }];
    query.mockResolvedValue({ data: mockRouteDataByDifficulty });
    const setRoutes = jest.fn();

    const { getByPlaceholderText } = render(<RouteFilter setRoutes={setRoutes} />);
    fireEvent.changeText(getByPlaceholderText("Level"), "5.10a");

    await waitFor(() => {
      expect(query).toHaveBeenCalledWith(Climber.get_routes_by_difficulty.call, ["5.10a"]);
      expect(setRoutes).toHaveBeenCalledWith(mockRouteDataByDifficulty);
    });
  });
});
