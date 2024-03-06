import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomTextInputFilter from "../../components/input/CustomFilterInput"; // Adjust the import path according to your project structure

describe("CustomTextInputFilter Component", () => {
  it("renders correctly and responds to text input changes", () => {
    // Mock onChange function
    const mockOnChange = jest.fn();

    // Render the component with initial props
    const { getByPlaceholderText } = render(
      <CustomTextInputFilter
        label="Test Label"
        value=""
        onChange={mockOnChange}
      />
    );

    // Find the TextInput element by its placeholder text
    const textInput = getByPlaceholderText("Test Label");

    // Simulate a text input change event
    fireEvent.changeText(textInput, "Test Value");

    // Check if the onChange function is called with the correct value
    expect(mockOnChange).toHaveBeenCalledWith("Test Value");
  });
});