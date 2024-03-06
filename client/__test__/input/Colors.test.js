import getColor from '../../components/input/Colors'; // Passe den Importpfad entsprechend deiner Projektstruktur an

describe('getColor Function', () => {
  it('returns correct color for valid input', () => {
    expect(getColor('RED')).toBe('red');
    expect(getColor('BLUE')).toBe('blue');
    expect(getColor('GREEN')).toBe('green');
    expect(getColor('YELLOW')).toBe('yellow');
    expect(getColor('BLACK')).toBe('black');
    expect(getColor('WHITE')).toBe('white');
    expect(getColor('ORANGE')).toBe('orange');
    expect(getColor('PURPLE')).toBe('purple');
    expect(getColor('PINK')).toBe('pink');
    expect(getColor('GRAY')).toBe('gray');
  });

  it('returns default color for invalid input', () => {
    expect(getColor('')).toBe('gray');
    expect(getColor('INVALID')).toBe('gray');
  });

  it('works for lowercase input as well', () => {
    expect(getColor('red')).toBe('red');
    expect(getColor('blue')).toBe('blue');
    expect(getColor('green')).toBe('green');
    expect(getColor('yellow')).toBe('yellow');
    expect(getColor('black')).toBe('black');
    expect(getColor('white')).toBe('white');
    expect(getColor('orange')).toBe('orange');
    expect(getColor('purple')).toBe('purple');
    expect(getColor('pink')).toBe('pink');
    expect(getColor('gray')).toBe('gray');
  });
});