import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import RouteLogBox from "../../../components/sections/dashboard/RouteLogBox";

describe("RouteLogBox Component", () => {
  it("renders correctly and responds to delete button press", () => {
    // Mock item data
    const item = {
      route_name: "Test Route",
      level_of_difficulty: "Intermediate",
      paused: "No",
      successful: true,
    };
    // Mock onDelete function
    const onDelete = jest.fn();

    // Render the component
    const { getByText } = render(<RouteLogBox item={item} onDelete={onDelete} />);

    // Check if route name is rendered correctly
    const routeNameElement = getByText(item.route_name);
    expect(routeNameElement).toBeTruthy();

    // Find and press the delete button
    const deleteButton = getByText("Delete");
    fireEvent.press(deleteButton);

    // Check if onDelete function is called with the correct item
    expect(onDelete).toHaveBeenCalledWith(item);
  });
});