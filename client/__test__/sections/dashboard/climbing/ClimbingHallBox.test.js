import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ClimbingHallBox from "../../../../components/sections/dashboard/climbing/ClimbingHallBox";

describe("ClimbingHallBox Component", () => {
  it("renders correctly and navigates to Routes screen when pressed", () => {
    // Mock navigation object
    const navigation = { navigate: jest.fn() };
    // Mock data for climbing hall
    const hallData = {
      index: 1,
      hall_name: "Test_Hall",
      street_address: "123 Test St",
      city: "Test City",
      postal_code: "12345",
      favourite: true,
    };

    const { getByText } = render(
      <ClimbingHallBox {...hallData} navigation={navigation} />
    );

    // Check if the hall name is rendered correctly
    const hallNameElement = getByText("Test Hall");
    expect(hallNameElement).toBeTruthy();

    // Check if the address is rendered correctly
    const addressElement = getByText("123 Test St, 12345 Test City");
    expect(addressElement).toBeTruthy();

    // Simulate press on the ClimbingHallBox
    fireEvent.press(hallNameElement);

    // Check if the navigation function is called with the correct parameters
    expect(navigation.navigate).toHaveBeenCalledWith("Routes", {
      hall_name: "Test_Hall",
      favourite: true,
    });
  });

  // Add more test cases as needed
});