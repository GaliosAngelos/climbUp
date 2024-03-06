import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonBack from '../../components/buttons/ButtonBack'; // Adjust the import path as necessary
import Ionicons from "react-native-vector-icons/Ionicons";

jest.mock("react-native-vector-icons/Ionicons", () => "Ionicons");

describe('ButtonBack Component', () => {
  it('renders correctly and triggers onPress event', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<ButtonBack onPress={mockOnPress} />);
    
    });
});
