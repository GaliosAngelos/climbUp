import React from "react";
import { render } from "@testing-library/react-native";
import styles from "../../components/styles/allStyles";
describe('Styles', () => {
  it('should match snapshot', () => {
    expect(styles).toMatchSnapshot();
  });
});