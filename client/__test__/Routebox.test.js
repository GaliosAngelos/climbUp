import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Route from "../components/sections/dashboard/climbing/Route";

describe("Route component", () => {
  test("renders correctly when not expanded", () => {
    const { getByText } = render(
      <Route
        color="#FF0000"
        levelOfDificulty="5.10"
        lineNumber={1}
        routeName="Test Route"
        Sector="Test Sector"
        Tilt={true}
        expanded={false}
        setExpanded={() => {}}
      />
    );

    expect(getByText("Test Route")).toBeTruthy();
    expect(getByText("Sektor Test Sector, Line 1, Tilt: yes")).toBeTruthy();
    expect(getByText("5.10")).toBeTruthy();
  });

  test("renders correctly when expanded", () => {
    const { getByText } = render(
      <Route
        color="#FF0000"
        levelOfDificulty="5.10"
        lineNumber={1}
        routeName="Test Route"
        Sector="Test Sector"
        Tilt={true}
        expanded={true}
        setExpanded={() => {}}
      />
    );

    expect(getByText("Test Route")).toBeTruthy();
    expect(getByText("Sektor Test Sector, Line 1, Tilt: yes")).toBeTruthy();
    expect(getByText("5.10")).toBeTruthy();
    expect(getByText("Completed!")).toBeTruthy();
    expect(getByText("Next Time!")).toBeTruthy();
    expect(getByText("+")).toBeTruthy();
    expect(getByText("-")).toBeTruthy();
    expect(getByText("Commit")).toBeTruthy();
  });

  test("increments and decrements attempts count correctly", () => {
    const { getByText } = render(
      <Route
        color="#FF0000"
        levelOfDificulty="5.10"
        lineNumber={1}
        routeName="Test Route"
        Sector="Test Sector"
        Tilt={true}
        expanded={true}
        setExpanded={() => {}}
      />
    );

    fireEvent.press(getByText("+"));
    expect(getByText("1")).toBeTruthy();

    fireEvent.press(getByText("-"));
    expect(getByText("0")).toBeTruthy();
  });

  test("selects button correctly when clicked", () => {
    const { getByText } = render(
      <Route
        color="#FF0000"
        levelOfDificulty="5.10"
        lineNumber={1}
        routeName="Test Route"
        Sector="Test Sector"
        Tilt={true}
        expanded={true}
        setExpanded={() => {}}
      />
    );

    fireEvent.press(getByText("Completed!"));
    expect(getByText("Completed!").props.selected).toBeTruthy();

    fireEvent.press(getByText("Next Time!"));
    expect(getByText("Next Time!").props.selected).toBeTruthy();
  });

  test("Commit button is clickable only when a selection is made", () => {
    const { getByText } = render(
      <Route
        color="#FF0000"
        levelOfDificulty="5.10"
        lineNumber={1}
        routeName="Test Route"
        Sector="Test Sector"
        Tilt={true}
        expanded={true}
        setExpanded={() => {}}
      />
    );

    expect(getByText("Commit").props.disabled).toBeTruthy();

    fireEvent.press(getByText("Completed!"));
    expect(getByText("Commit").props.disabled).toBeFalsy();
  });
});
