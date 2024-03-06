import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonDeleteUpdate from '../../components/buttons/ButtonDeleteUpdate'; // Passe den Importpfad entsprechend deiner Projektstruktur an

describe('ButtonDeleteUpdate Component', () => {
  it('renders correctly and responds to press events', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonDeleteUpdate onPress={mockOnPress} abfrage={true} />
    );

    const button = getByText('Delete');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders correctly with correct text, icon, and color when abfrage is true', () => {
    const mockOnPress = jest.fn();
    const { getByText, getByTestId } = render(
      <ButtonDeleteUpdate onPress={mockOnPress} abfrage={true} />
    );

    const button = getByText('Delete');
    const iconName = getByTestId('delete-icon');

    expect(button).toBeTruthy();
    expect(iconName).toBeTruthy();
    expect(button).toHaveStyle({ backgroundColor: '#F5BBBA' });
  });

  it('renders correctly with correct text, icon, and color when abfrage is false', () => {
    const mockOnPress = jest.fn();
    const { getByText, getByTestId } = render(
      <ButtonDeleteUpdate onPress={mockOnPress} abfrage={false} />
    );

    const button = getByText('Update');
    const iconName = getByTestId('update-icon');

    expect(button).toBeTruthy();
    expect(iconName).toBeTruthy();
    expect(button).toHaveStyle({ backgroundColor: '#8FD78F' });
  });
});