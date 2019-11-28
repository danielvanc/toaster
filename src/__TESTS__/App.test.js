import React from 'react'
import 
{ render, cleanup, fireEvent} from '@testing-library/react'
import App from '../App';
import Toast from '../components/toast'
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

  it('Lever activates and disables heat controls', () => {
    const { getByTestId } = render(<Toaster />)
    const lever = getByTestId('lever')

    expect(lever).toBeTruthy();

    fireEvent.click(lever)
    expect(lever).toHaveProperty('disabled')
  })
})

afterAll(
  cleanup
)