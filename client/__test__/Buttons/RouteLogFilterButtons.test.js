import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RouteLogFilterButtons from '../../components/buttons/RouteLogFilterButtons'; // Passe den Importpfad entsprechend deiner Projektstruktur an

describe('RouteLogFilterButtons Component', () => {
  it('renders correctly and responds to button press events', () => {
    const setSelectedTimeframe = jest.fn();
    const { getByText } = render(
      <RouteLogFilterButtons setSelectedTimeframe={setSelectedTimeframe} />
    );

    const lastDayButton = getByText('last Day');
    const lastWeekButton = getByText('last Week');
    const lastMonthButton = getByText('last Month');
    const lastYearButton = getByText('last Year');

    fireEvent.press(lastDayButton);
    expect(setSelectedTimeframe).toHaveBeenCalledWith('lastDay');

    fireEvent.press(lastWeekButton);
    expect(setSelectedTimeframe).toHaveBeenCalledWith('lastWeek');

    fireEvent.press(lastMonthButton);
    expect(setSelectedTimeframe).toHaveBeenCalledWith('lastMonth');

    fireEvent.press(lastYearButton);
    expect(setSelectedTimeframe).toHaveBeenCalledWith('lastYear');
  });
});