import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonInsert from '../../components/buttons/ButtonInsert'; // Passe den Importpfad entsprechend deiner Projektstruktur an

describe('ButtonInsert Component', () => {
  it('renders correctly and responds to press events', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonInsert onPress={mockOnPress} name="Insert" />
    );

    const button = getByText('Insert');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders correctly with correct text and icon', () => {
    const mockOnPress = jest.fn();
    const { getByText, getByTestId } = render(
      <ButtonInsert onPress={mockOnPress} name="Insert" />
    );

    const button = getByText('Insert');
    const iconName = getByTestId('insert-icon');

    expect(button).toBeTruthy();
    expect(iconName).toBeTruthy();
  });
});