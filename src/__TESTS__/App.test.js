import React from 'react'
import { render, cleanup} from '@testing-library/react'
import App from '../App';
import Toaster from '../components/Toaster'

let container = null;

beforeAll(() => {
  container = document.createElement('div');
  render(<App />, container);
});

const defaultProps = {
  onClick: jest.fn(),
}

describe('Main app tests', () => {
  it('Page loads and doesn\'t crash', () => {
    const { queryByText } = render("<h1>");
    expect(queryByText('Toaster!')).toBeTruthy();
  })

  it('Displays the toaster and is able to click Load', () => {
    const { queryByText } = render(<Toaster {...defaultProps} />);
    expect(queryByText('Load')).toBeTruthy()
    
    

    
  })
})

afterAll(
  // () => {
  // unmountComponentAtNode(container);
  // container.remove();
  // container = null;
  // }
  cleanup
)