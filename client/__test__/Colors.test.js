// Colors.test.js
import getColor from "../components/input/Colors"; // Adjust the import path

describe('Colors Utility', () => {
  it('provides correct color codes', () => {
    expect(getColor('Rot')).toBe('red'); 
    expect(getColor('Blau')).toBe('blue'); 
    expect(getColor('heyThere')).toBe('gray');
  });
});

/*
Colors.test.js
This test suite for the Colors utility validates that the utility returns the correct color codes for predefined color names. 
It's crucial for maintaining consistent styling across the app. 
By asserting specific color codes, we ensure the utility's reliability and prevent accidental changes that could affect 
the app's visual consistency.
*/