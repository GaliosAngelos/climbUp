import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustTextInputRoutes from '../../components/input/CustTextInputRoutes'; // Adjust the import path according to your project structure

describe('CustTextInputRoutes Component', () => {
  it('renders correctly and updates value on text change', () => {
    const mockSetValue = jest.fn();
    const { getByPlaceholderText } = render(
      <CustTextInputRoutes placeholder="Enter Value" keyboardType="default" value="" setValue={mockSetValue} />
    );

    const inputField = getByPlaceholderText('Enter Value');
    expect(inputField).toBeTruthy();

    fireEvent.changeText(inputField, 'New Value');
    expect(mockSetValue).toHaveBeenCalledWith('New Value');
  });
});