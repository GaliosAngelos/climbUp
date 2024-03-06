import React from 'react';
import { render } from '@testing-library/react-native';
import MainContainer from '../navigation/MainContainer';

test('Navigation Container Renders Properly', () => {
  const { getByText } = render(<MainContainer />);

  // Assert if the login screen is rendered
  expect(getByText('Login')).toBeTruthy();

  // Assert if the registration screen is rendered
  expect(getByText('Registration')).toBeTruthy();

  // Assert if the forgot password screen is rendered
  expect(getByText('ForgotPassword')).toBeTruthy();

  // Add assertions for other screens if needed
});

