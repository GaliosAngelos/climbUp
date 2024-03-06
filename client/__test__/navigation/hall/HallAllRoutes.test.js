import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HallAllRoutes from "./HallAllRoutes";
import { query } from "../../Controller/requestHandler";

jest.mock("@react-native-async-storage/async-storage");
jest.mock("../../Controller/requestHandler");

describe("HallAllRoutes Component", () => {
  beforeEach(() => {
    AsyncStorage.getItem.mockResolvedValue(JSON.stringify({ user: "test_user" }));
    query.mockResolvedValue({ data: { data: [{ route_name: "Test Route", level_of_difficulty: "5.10a", sector: "A" }] } });
  });

  it("should render HallAllRoutes component with correct data", async () => {
    const { getByText } = render(<HallAllRoutes />);

    await waitFor(() => {
      expect(getByText("Keep your Routes updated.")).toBeDefined();
      expect(getByText("New Route")).toBeDefined();
      expect(getByText("Test Route")).toBeDefined();
      expect(getByText("5.10a")).toBeDefined();
      expect(getByText("Sector A")).toBeDefined();
    });
  });
});
