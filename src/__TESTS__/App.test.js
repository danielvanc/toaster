import React from 'react'
import { 
  render, 
  cleanup, 
  fireEvent
} from '@testing-library/react'
import App from '../App';
import Toaster from '../components/Toaster'

let container = null;

beforeAll(() => {
  container = document.createElement('div');
  render(<App />, container);
});

describe('Main app tests', () => {
  it('Page loads and doesn\'t crash', () => {
    const { queryByText } = render("<h1>");
    expect(queryByText('Toaster!')).toBeTruthy();
  })

  it('Displays the toaster and is able to click Load', () => {
    const { queryByText } = render(<Toaster />);
    const toast = container.querySelector('.toasting')
    expect(queryByText('Load')).toBeTruthy()
    
    fireEvent.click(queryByText('Load'))
    expect(toast).toBeFalsy();
  })

  it('Check toast exists', () => {
    const { getByTestId } = render(<Toaster />)
    const toast = getByTestId('toast');
    expect(toast).toBeTruthy();
  })

  it('Lever activates and disables heat controls', () => {
    const { getByTestId } = render(<Toaster />)
    const lever = getByTestId('lever')

    expect(lever).toBeTruthy();

    fireEvent.click(lever)
    expect(lever).toHaveProperty('disabled')
  })

  it('On lever pushed, it disables and toast starts', () => {
    const { getByTestId } = render(<Toaster />)
    const toast = getByTestId('toast');
    const lever = getByTestId('lever');

    expect(lever).toBeTruthy();
    expect(toast).toBeTruthy();
    
    fireEvent.click(lever);
    expect(lever).toHaveProperty('disabled')
    
    // After lever hit, Check toast has a class name of down
    expect(toast.classList.contains("down")).toBeTruthy();
    
    // Delay time and check for toasting class as well. :) 
    setTimeout(() => {
      expect(toast.classList.contains("toasting")).toBeTruthy();
    }, 500)
  })

  it('On lever click check heat controls disable', () => {
    const { getByTestId } = render(<Toaster />)
    const toast = getByTestId('toast');
    const lever = getByTestId('lever');
    const levels = getByTestId('heatlevels');

    expect(lever).toBeTruthy();
    expect(toast).toBeTruthy();
    
    fireEvent.click(lever);
    expect(lever).toHaveProperty('disabled')
    
    // After lever hit, Check heat levels are disabled
    expect(levels).toBeTruthy();
    const levelButton = levels.querySelector("button")
    expect(levelButton).toBeTruthy()
    expect(levelButton).toHaveProperty('disabled')
  })
})

afterAll(
  cleanup
)