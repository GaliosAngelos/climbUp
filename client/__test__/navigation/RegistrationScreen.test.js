import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import RegistrationScreen from "../navigation/RegistrationScreen";

describe("RegistrationScreen Component for Climber", () => {
  it("should render RegistrationScreen with options for climbers", () => {
    const { getByText, getByPlaceholderText } = render(<RegistrationScreen />);

    expect(getByText("Let's go and grab the summit!")).toBeDefined();
    expect(getByText("Climber")).toBeDefined();
    expect(getByPlaceholderText("Username")).toBeDefined();
    expect(getByPlaceholderText("E-Mail")).toBeDefined();
    expect(getByPlaceholderText("Password")).toBeDefined();
    expect(getByText("Sign in")).toBeDefined();
  });
});

