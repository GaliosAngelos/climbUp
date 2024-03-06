import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustTextInputEmail from "../../components/input/CustTextInputEmail"; // Adjust the import path as needed

describe("CustTextInputEmail Component", () => {
  it("updates email state correctly when text input changes", () => {
    const setEmail = jest.fn(); // Mock setEmail function

    const { getByPlaceholderText } = render(
      <CustTextInputEmail
        text="Email"
        keyboardType="email-address"
        email=""
        setEmail={setEmail}
      />
    );

    const emailInput = getByPlaceholderText("Email");
    fireEvent.changeText(emailInput, "test@example.com");

    expect(setEmail).toHaveBeenCalledWith("test@example.com");
  })
});