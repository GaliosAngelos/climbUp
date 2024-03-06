import React from 'react';
import { render } from '@testing-library/react-native';
import ClimbingHallList from '../../components/lists/ClimbingHallList';

describe('ClimbingHallList component', () => {
  it('renders correctly with empty halls array', () => {
    const halls = [];
    const navigation = {};
    const favourite = {};
    
    const { queryByTestId } = render(
      <ClimbingHallList halls={halls} navigation={navigation} favourite={favourite} />
    );

    expect(queryByTestId('climbing-hall-box')).toBeNull();
  });

  it('renders correctly with halls array', () => {
    const halls = [
      {
        hall_name: 'Test Hall',
        street_address: 'Test Street 123',
        city: 'Test City',
        postal_code: '12345',
      },
    ];
    const navigation = {};
    const favourite = {};
    
    const { getByText } = render(
      <ClimbingHallList halls={halls} navigation={navigation} favourite={favourite} />
    );

    expect(getByText('Test Hall')).toBeTruthy();
    expect(getByText('Test Street 123')).toBeTruthy();
    expect(getByText('Test City')).toBeTruthy();
    expect(getByText('12345')).toBeTruthy();
  });
});