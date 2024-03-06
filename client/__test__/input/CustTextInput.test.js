import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustTextInput from '../../components/input/CustTextInput'; // Adjust the import path according to your project structure

describe('CustTextInput Component', () => {
  it('renders correctly and responds to text input changes', () => {
    // Preparation
    const mockSetUser = jest.fn();
    const testText = 'Test Input';
    const { getByPlaceholderText } = render(
      <CustTextInput
        text={testText}
        keyboardType="default"
        user=""
        setUser={mockSetUser}
      />
    );

    // Action
    const inputField = getByPlaceholderText(testText);
    fireEvent.changeText(inputField, 'New Value');

    // Expected Result
    expect(mockSetUser).toHaveBeenCalledWith('New Value');
  });
});