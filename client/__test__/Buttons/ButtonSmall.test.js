import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonSmall from '../../components/buttons/ButtonSmall'; // Passe den Importpfad entsprechend deiner Projektstruktur an

describe('ButtonSmall Component', () => {
  it('renders correctly and responds to press events', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonSmall text="Test Button" onPress={mockOnPress} />
    );

    const button = getByText('Test Button');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});