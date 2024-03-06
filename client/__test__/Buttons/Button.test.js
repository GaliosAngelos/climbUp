import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../../components/buttons/Button'; // Adjust the import path according to your project structure

describe('Button Component', () => {
  it('renders correctly and responds to press events', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<Button text="Click Me" onPress={mockOnPress} />);

    const button = getByText('Click Me');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
