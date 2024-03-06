import React from "react";
import { render } from "@testing-library/react-native";
import SettingsScreen from "./SettingsScreen";

describe("SettingsScreen Component", () => {
  it("should render the SettingsScreen component without errors", () => {
    const { getByText, getByPlaceholderText } = render(<SettingsScreen />);
    expect(getByText("Make the change!")).toBeDefined();
    expect(getByText("Username:")).toBeDefined();
    expect(getByText("Email:")).toBeDefined();
    expect(getByPlaceholderText("Actual Password")).toBeDefined();
    expect(getByPlaceholderText("New Password")).toBeDefined();
    expect(getByPlaceholderText("Confirm New Password")).toBeDefined();
    expect(getByText("Update Password")).toBeDefined();
    expect(getByText("Go to Login Page")).toBeDefined();
    expect(getByText("Logout")).toBeDefined();
    expect(getByText("Contact us.")).toBeDefined();
    expect(getByText("team@climbup.com")).toBeDefined();
  });
});
