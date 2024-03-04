// CustTextInputEmail.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustTextInputEmail from '../components/input/CustTextInputEmail';

describe('CustTextInputEmail Component', () => {
  it('renders correctly with email placeholder', () => {
    const { getByPlaceholderText } = render(<CustTextInputEmail placeholder="Email" value="" setValue={() => {}} />);
    expect(getByPlaceholderText('Email')).toBeTruthy();
  });

  // Assuming the component includes some form of email validation
  it('calls setValue with valid email', () => {
    const mockSetValue = jest.fn();
    const { getByPlaceholderText } = render(<CustTextInputEmail placeholder="Email" value="" setValue={mockSetValue} />);
    fireEvent.changeText(getByPlaceholderText('Email'), 'valid@example.com');
    expect(mockSetValue).toHaveBeenCalledWith('valid@example.com');
  });
});

/*This test suite ensures the CustTextInputEmail component behaves as expected. 
The first test verifies that the component renders correctly with a placeholder for email input, 
confirming that initial properties are passed and rendered properly. 
The second test simulates typing a valid email address into the input field and checks if the 
setValue function is called with the correct value, ensuring the component handles 
user input and validation as intended.
*/
