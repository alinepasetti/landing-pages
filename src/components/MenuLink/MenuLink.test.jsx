import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://url.com">Children</MenuLink>);
    const link = screen.getByRole('link', { name: 'Children' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('target', '_self');
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://url.com" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    renderTheme(<MenuLink link="http://url.com">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' }))
      .toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #0A1128;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://url.com"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
