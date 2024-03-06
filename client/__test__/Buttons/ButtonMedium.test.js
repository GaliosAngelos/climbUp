import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonMedium from '../../components/buttons/ButtonMedium'; // Passe den Importpfad entsprechend deiner Projektstruktur an

describe('ButtonMedium Component', () => {
  it('renders correctly and responds to press events', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonMedium text="Test Button" onPress={mockOnPress} color="red" selected={false} />
    );

    const button = getByText('Test Button');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders correctly with selected color when selected is true', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonMedium text="Test Button" onPress={mockOnPress} color="red" selected={true} />
    );

    const button = getByText('Test Button');
    expect(button).toBeTruthy();
    expect(button).toHaveStyle({ backgroundColor: '#484848' });
    expect(button).toHaveStyle({ color: 'red' });
  });

  it('renders correctly with default color when selected is false', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonMedium text="Test Button" onPress={mockOnPress} color="red" selected={false} />
    );

    const button = getByText('Test Button');
    expect(button).toBeTruthy();
    expect(button).toHaveStyle({ backgroundColor: 'transparent' });
    expect(button).toHaveStyle({ color: 'black' });
  });
});