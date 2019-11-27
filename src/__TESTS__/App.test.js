import React from 'react'
// import { render, unmountComponentAtNode } from 'react-dom'
import { render, cleanup} from '@testing-library/react'
import App from '../App';

let container = null;

beforeAll(() => {
  container = document.createElement('div');
  render(<App />, container);
});

// const defaultProps = {
//   onClick: jest.fn(),

// }

describe('Main app tests', () => {
  it('Page loads and doesn\'t crash', () => {
    const { queryByText } = render("<h1>");
    expect(queryByText('Toaster!')).toBeTruthy();
  })

  it('Displays the toaster and is able to start', () => {
    const {} = render(".Toaster");
    
    // expect(container.querySelector(".Toaster")).toBeTruthy();

    // const Lever = container.querySelector('.lever');
    // expect(Lever).toBeTruthy();
    

    
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