import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link', { name: /link/i })).toHaveLength(10);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByRole('link', { name: /link/i })).toHaveLength(0);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(
      screen.queryByRole('link', { name: /link 10/i }).parentElement,
    ).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.medium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
      }

      .c1 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c1::after {
        content: '';
        position: absolute;
        bottom: 0.76rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c1:hover::after {
        left: 25%;
        width: 50%;
      }

      @media (max-width:768px) {
        .c0 {
          -webkit-flex-flow: column wrap;
          -ms-flex-flow: column wrap;
          flex-flow: column wrap;
          -webkit-align-content: center;
          -ms-flex-line-pack: center;
          align-content: center;
        }
      }

      <nav
        class="c0"
      >
        <a
          class="c1"
          href="#target1"
          target="_self"
        >
          Link 1
        </a>
        <a
          class="c1"
          href="#target2"
          target="_self"
        >
          Link 2
        </a>
        <a
          class="c1"
          href="#target3"
          target="_self"
        >
          Link 3
        </a>
        <a
          class="c1"
          href="#target4"
          target="_self"
        >
          Link 4
        </a>
        <a
          class="c1"
          href="#target5"
          target="_self"
        >
          Link 5
        </a>
        <a
          class="c1"
          href="#target6"
          target="_self"
        >
          Link 6
        </a>
        <a
          class="c1"
          href="#target7"
          target="_self"
        >
          Link 7
        </a>
        <a
          class="c1"
          href="#target8"
          target="_self"
        >
          Link 8
        </a>
        <a
          class="c1"
          href="#target9"
          target="_self"
        >
          Link 9
        </a>
        <a
          class="c1"
          href="#target10"
          target="_self"
        >
          Link 10
        </a>
      </nav>
    `);
  });
});
