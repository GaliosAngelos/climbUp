import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ForgotPasswordScreen from "./ForgotPasswordScreen";

describe("ForgotPasswordScreen Component", () => {
  it("should render ForgotPasswordScreen component with correct content", () => {
    const { getByText, getByTestId } = render(<ForgotPasswordScreen />);
    
    // Check if the text "ForgotPasswordScreen" is displayed
    expect(getByText("ForgotPasswordScreen")).toBeDefined();

    // Check if the button is displayed
    const button = getByTestId("login-button");
    expect(button).toBeDefined();
    expect(button.props.title).toBe("Go to Login Page ");

    // Simulate button click and check if navigation works
    fireEvent.press(button);
    expect(navigation.navigate).toHaveBeenCalledWith("Login");
  });

  // Add more test cases for interaction behaviors if needed
});
