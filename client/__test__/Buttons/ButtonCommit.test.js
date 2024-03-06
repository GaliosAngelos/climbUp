import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonCommit from '../../components/buttons/ButtonCommit'; // Passe den Importpfad entsprechend deiner Projektstruktur an

describe('ButtonCommit Component', () => {
  it('renders correctly and responds to press events', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonCommit onPress={mockOnPress} selected={false} hasSelection={true} />
    );

    const button = getByText('Commit');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders correctly and is disabled when hasSelection is false', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonCommit onPress={mockOnPress} selected={false} hasSelection={false} />
    );

    const button = getByText('Commit');
    expect(button).toBeTruthy();
    expect(button).toHaveStyle({ backgroundColor: 'transparent', opacity: 0.3 });
    expect(button).toBeDisabled();
  });

  it('renders correctly and is enabled when hasSelection is true', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonCommit onPress={mockOnPress} selected={false} hasSelection={true} />
    );

    const button = getByText('Commit');
    expect(button).toBeTruthy();
    expect(button).not.toHaveStyle({ backgroundColor: 'transparent', opacity: 0.3 });
    expect(button).not.toBeDisabled();
  });

  it('renders correctly and displays selected color when selected is true', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonCommit onPress={mockOnPress} selected={true} hasSelection={true} />
    );

    const button = getByText('Commit');
    expect(button).toBeTruthy();
    expect(button).toHaveStyle({ color: 'selectedColor' }); // Hier sollte der tatsächliche Farbwert für "selectedColor" eingesetzt werden
  });
});