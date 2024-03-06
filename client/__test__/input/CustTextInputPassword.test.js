import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustTextInputPassword from "../../components/input/CustTextInputPassword"; // Passe den Importpfad entsprechend deiner Projektstruktur an

describe("CustTextInputPassword Component", () => {
  it("updates password state correctly when text input changes", () => {
    const setPassword = jest.fn(); // Mock setPassword function

    const { getByPlaceholderText } = render(
      <CustTextInputPassword
        text="Password"
        password=""
        setPassword={setPassword}
      />
    );

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.changeText(passwordInput, "testPassword");

    expect(setPassword).toHaveBeenCalledWith("testPassword");
  });

  it("toggles password visibility correctly when eye icon is pressed", () => {
    const setPassword = jest.fn(); // Mock setPassword function

    const { getByTestId } = render(
      <CustTextInputPassword
        text="Password"
        password=""
        setPassword={setPassword}
      />
    );

    const eyeIcon = getByTestId("eye-icon");
    fireEvent.press(eyeIcon);

    // Check if the secureTextEntry prop of TextInput is toggled
    const passwordInput = getByTestId("password-input");
    expect(passwordInput.props.secureTextEntry).toBe(false);

    fireEvent.press(eyeIcon); // Toggle again
    expect(passwordInput.props.secureTextEntry).toBe(true);
  });
});