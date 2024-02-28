import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import ClimbingHallScreen from '../navigation/ClimbingHallScreen'; // Pfad zur Komponente anpassen
import { query } from '../components/request/generalRequest.js'; // Stelle sicher, dass dieser Pfad korrekt ist
import { act } from '@testing-library/react-native';

// Mocking request and data for testing purposes
jest.mock('../components/request/generalRequest.js', () => ({
    query: jest.fn(),
}));

describe('ClimbingHallScreen Component', () => {
    it('renders without crashing', async () => {
        const promise = Promise.resolve({ data: [] });
        query.mockImplementation(() => promise);
        render(<ClimbingHallScreen />);

        await act(() => promise); // Warte, bis die Promise abgeschlossen ist
    });

    it('fetches climbing halls data on component mount', async () => {
        const hallsData = [
            { hall_name: 'Hall 1', street_address: 'Address 1', city: 'City 1', postal_code: '12345' },
            { hall_name: 'Hall 2', street_address: 'Address 2', city: 'City 2', postal_code: '54321' },
        ];
        const promise = Promise.resolve({ data: hallsData });
        query.mockImplementation(() => promise);

        const { findByText } = render(<ClimbingHallScreen />);
        await act(() => promise); // Warte, bis die Promise abgeschlossen ist

        expect(await findByText('Hall 1')).toBeTruthy(); // Überprüfe, ob 'Hall 1' gerendert wird
        // Füge weitere Überprüfungen hinzu, falls erforderlich
    });
});
