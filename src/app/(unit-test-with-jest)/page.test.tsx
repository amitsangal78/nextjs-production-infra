import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import UnitTestPractice from './page';

describe('Text Content Tests', () => {
  // For testing text that might not be immediately available
  test('should eventually display text', async () => {
    render(<UnitTestPractice />);

    // Wait for text to appear
    const element = await screen.findByText('test text');
    expect(element).toBeInTheDocument();
  });

  // For testing multiple instances of text
  // test('should display multiple text elements', () => {
  //   render(<UnitTestPractice />);

  //   const elements = screen.getAllByText(/test text/i);
  //   expect(elements).toHaveLength(3); // if expecting 3 matches
  // });

  // For testing text is not present
  test('should not display specific text', () => {
    render(<UnitTestPractice />);

    expect(screen.queryByText('Unwanted Text')).not.toBeInTheDocument();
  });
});
