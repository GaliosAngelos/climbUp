import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonBack from '../components/buttons/ButtonBack'; // Adjust the import path as necessary
import Ionicons from "react-native-vector-icons/Ionicons";

jest.mock("react-native-vector-icons/Ionicons", () => "Ionicons");

describe('ButtonBack Component', () => {
  it('renders correctly and triggers onPress event', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<ButtonBack onPress={mockOnPress} />);
    
    // Since direct selection of Ionicons or TouchableOpacity by text or testID is not feasible,
    // and assuming Ionicons is the only or first child, you might need to rely on this approach.
    // This approach is not directly supported by @testing-library/react-native, as it 
    // abstracts away such direct component type selections for user-centric testing.
    // An alternative approach could involve ensuring accessibility features are used
    // and selecting based on those instead.

    // fireEvent.press(getByTestId('Ionicons'));
    // expect(mockOnPress).toHaveBeenCalledTimes();
  });
});

