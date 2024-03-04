// CustTextInputRoutes.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustTextInputRoutes from '../components/input/CustTextInputRoutes'

describe('CustTextInputRoutes Component', () => {
  it('renders with the correct placeholder', () => {
    const { getByPlaceholderText } = render(<CustTextInputRoutes placeholder="Enter route" keyboardType="default" />);
    expect(getByPlaceholderText('Enter route')).toBeTruthy();
  });

  it('updates value on change', () => {
    const mockSetEmail = jest.fn();
    const { getByPlaceholderText } = render(<CustTextInputRoutes placeholder="Email" keyboardType="email-address" value="" setValue={mockSetEmail} />);
    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    expect(mockSetEmail).toHaveBeenCalledWith('test@example.com');
  });
});

/*
First Test: Checks if the component correctly renders with the given placeholder. 
This validates that the component is receiving props and displaying them as expected.
Second Test: Simulates a text change and checks if the setValue callback is called with the new value. 
This ensures that the component is interactive and responds to user input as expected.
*/
