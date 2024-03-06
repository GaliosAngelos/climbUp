import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Route from '../../../../components/sections/dashboard/climbing/RouteBox';

describe('Route Component', () => {
  it('renders correctly and responds to press events', () => {
    const mockSetExpanded = jest.fn();
    const { getByText } = render(
      <Route
        hallname="Hall Name"
        color="#FFFFFF"
        levelOfDifficulty="5.10b"
        lineNumber={2}
        routeName="Test Route"
        Sector="Test Sector"
        Tilt={false}
        expanded={false}
        setExpanded={mockSetExpanded}
      />
    );

    const routeNameText = getByText('Test Route');
    expect(routeNameText).toBeTruthy();

    fireEvent.press(routeNameText);
    expect(mockSetExpanded).toHaveBeenCalledTimes(1);
  });

  it('expands correctly and displays additional buttons when expanded', () => {
    const mockSetExpanded = jest.fn();
    const { getByText } = render(
      <Route
        hallname="Hall Name"
        color="#FFFFFF"
        levelOfDifficulty="5.10b"
        lineNumber={2}
        routeName="Test Route"
        Sector="Test Sector"
        Tilt={false}
        expanded={true}
        setExpanded={mockSetExpanded}
      />
    );

    const completedButton = getByText('Completed!');
    const nextTimeButton = getByText('Next Time!');
    const commitButton = getByText('Commit');

    expect(completedButton).toBeTruthy();
    expect(nextTimeButton).toBeTruthy();
    expect(commitButton).toBeTruthy();
  });

  it('updates the rest state correctly when pressing buttons', () => {
    const mockSetExpanded = jest.fn();
    const { getByText } = render(
      <Route
        hallname="Hall Name"
        color="#FFFFFF"
        levelOfDifficulty="5.10b"
        lineNumber={2}
        routeName="Test Route"
        Sector="Test Sector"
        Tilt={false}
        expanded={true}
        setExpanded={mockSetExpanded}
      />
    );

    const minusButton = getByText('-');
    const plusButton = getByText('+');
    const restText = getByText('0');

    fireEvent.press(plusButton);
    expect(restText).toHaveTextContent('1');

    fireEvent.press(minusButton);
    expect(restText).toHaveTextContent('0');
  });
});