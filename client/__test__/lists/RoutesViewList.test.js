import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import RoutesViewList from "../../components/lists/RoutesViewList";
import { Climber } from "../../Controller/Procedures";
import { query } from "../../Controller/requestHandler";

jest.mock("../../Controller/requestHandler");

describe("RoutesViewList Component", () => {
  it("fetches and renders route statistics correctly", async () => {
    // Preparation
    const interval = { past: "2024-01-01", now: "2024-01-02" };
    const mockedStatistics = [
      {
        hall_name: "Hall A",
        route_name: "Route 1",
        climb_timestamp: "2024-01-02T10:00:00Z",
      },
      {
        hall_name: "Hall B",
        route_name: "Route 2",
        climb_timestamp: "2024-01-02T11:00:00Z",
      },
    ];
    query.mockResolvedValue({ data: { data: mockedStatistics } });

    // Action
    const { getByTestId } = render(<RoutesViewList interval={interval} />);
    await waitFor(() => expect(query).toHaveBeenCalledTimes(1));

    // Expected Result
    mockedStatistics.forEach((item) => {
      const routeLogBox = getByTestId(`${item.hall_name}-${item.route_name}`);
      expect(routeLogBox).toBeTruthy();
    });
  });

  it("deletes a route statistic when onDelete is called", async () => {
    // Preparation
    const interval = { past: "2024-01-01", now: "2024-01-02" };
    const mockedStatistics = [
      {
        hall_name: "Hall A",
        route_name: "Route 1",
        climb_timestamp: "2024-01-02T10:00:00Z",
      },
      {
        hall_name: "Hall B",
        route_name: "Route 2",
        climb_timestamp: "2024-01-02T11:00:00Z",
      },
    ];
    query.mockResolvedValue({ data: { data: mockedStatistics } });

    // Action
    const { getByTestId } = render(<RoutesViewList interval={interval} />);
    await waitFor(() => expect(query).toHaveBeenCalledTimes(1));

    const deleteButton = getByTestId("delete-button-0");
    fireEvent.press(deleteButton);
    await waitFor(() => expect(query).toHaveBeenCalledTimes(2));

    // Expected Result
    const updatedStatistics = mockedStatistics.filter(
      (item) => item.route_name !== "Route 1"
    );
    expect(query).toHaveBeenCalledWith(
      Climber.delete_user_statistic.call,
      ["Hall A", "Route 1", "2024-01-02T10:00:00Z"]
    );
    updatedStatistics.forEach((item) => {
      const routeLogBox = getByTestId(`${item.hall_name}-${item.route_name}`);
      expect(routeLogBox).toBeTruthy();
    });
  });
});