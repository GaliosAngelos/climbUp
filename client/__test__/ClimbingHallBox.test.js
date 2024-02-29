import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ClimbingHallBox from '../components/sections/dashboard/climbing/ClimbingHallBox'; // Adjust the import path as necessary

describe('ClimbingHallBox', () => {
    const mockNavigate = jest.fn();
    const props = {
        index: 0,
        hall_name: 'Boulder World',
        street_address: '123 Climb St',
        city: 'Climbville',
        postal_code: '12345',
        navigation: { navigate: mockNavigate },
        favourite: false,
    };

    it('renders climbing hall information correctly', () => {
        const { getByText } = render(<ClimbingHallBox {...props} />);
        expect(getByText('Boulder World')).toBeTruthy();
        expect(getByText('123 Climb St, 12345 Climbville')).toBeTruthy();
    });

    it('navigates to the routes screen when pressed', () => {
        const { getByText } = render(<ClimbingHallBox {...props} />);
        const hallBox = getByText('Boulder World');
        fireEvent.press(hallBox);
        expect(mockNavigate).toHaveBeenCalledWith('Routen', { hall_name: 'Boulder World' });
    });

    it('shows green border for favourite climbing hall', () => {
        // Override the favourite prop for this test
        const favouriteProps = { ...props, favourite: true };
        const { getByText } = render(<ClimbingHallBox {...favouriteProps} />);
        const hallBox = getByText('Boulder World').parentNode;
        expect(hallBox.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    borderColor: 'green',
                }),
            ])
        );
    });
});
