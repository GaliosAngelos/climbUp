import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoginScreen from '../../navigation/LoginScreen';

describe("LoginScreen Component", () => {
  it("should render LoginScreen component with correct content", () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);

    expect(getByText("Welcome back, climber!")).toBeDefined();
    expect(getByPlaceholderText("Username or E-Mail")).toBeDefined();
    expect(getByPlaceholderText("Password")).toBeDefined();
    expect(getByText("Log in")).toBeDefined();
    expect(getByText("Forgot your password?")).toBeDefined();
    expect(getByText("Not signed in yet?")).toBeDefined();
  });

  it("should switch to Hallowner login when Hallowner button is pressed", () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);

    fireEvent.press(getByText("Hallowner"));

    expect(getByText("Welcome back, Hallowner")).toBeDefined();
    expect(getByPlaceholderText("Username or E-Mail")).toBeDefined();
    expect(getByPlaceholderText("Password")).toBeDefined();
    expect(getByText("Log in")).toBeDefined();
    expect(getByText("Forgot your password?")).toBeDefined();
    expect(getByText("Not signed in yet?")).toBeDefined();
  });

  it("should switch to Climber login when Climber button is pressed", () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);

    fireEvent.press(getByText("Climber"));

    expect(getByText("Welcome back, climber!")).toBeDefined();
    expect(getByPlaceholderText("Username or E-Mail")).toBeDefined();
    expect(getByPlaceholderText("Password")).toBeDefined();
    expect(getByText("Log in")).toBeDefined();
    expect(getByText("Forgot your password?")).toBeDefined();
    expect(getByText("Not signed in yet?")).toBeDefined();
  });

  // Add more test cases for interaction behaviors if needed
});
