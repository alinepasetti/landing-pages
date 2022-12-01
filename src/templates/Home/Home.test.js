import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';

test('renders the element with the expected style', () => {
  renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: 'purple',
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'purple');
});
