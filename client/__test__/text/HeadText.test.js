import React from 'react';
import { render } from '@testing-library/react-native';
import HeadText from '../../components/text/HeadText';

describe('HeadText Component', () => {
  it('renders correctly with provided content', () => {
    const content = 'Sample Content';
    const { getByText } = render(<HeadText content={content} />);
    
    expect(getByText(content)).toBeTruthy();
  });

  it('applies additional styles when provided', () => {
    const content = 'Sample Content';
    const additionalStyle = { color: 'red' };
    const { getByText } = render(<HeadText content={content} additionalStyle={additionalStyle} />);
    
    const textElement = getByText(content);
    expect(textElement.props.style).toContainEqual(additionalStyle);
  });
});