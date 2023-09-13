import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexThumbnail from './FlexThumbnail';

describe('<FlexThumbnail />', () => {
  test('it should mount', () => {
    render(<FlexThumbnail />);
    
    const flexThumbnail = screen.getByTestId('FlexThumbnail');

    expect(flexThumbnail).toBeInTheDocument();
  });
});