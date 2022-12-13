import { renderTheme } from '../../styles/render-theme';
import { Heading } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: '#FFFFFF',
      'text-transform': 'none',
      'font-size': '6.4rem',
    });
  });

  it('should render with given style', () => {
    renderTheme(
      <Heading lightMode={false} size={'small'} uppercase={true}>
        texto
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: '#dc143c',
      'text-transform': 'uppercase',
      'font-size': '2.4rem',
    });
  });

  it.each([
    ['small', '2.4rem'],
    ['medium', '3.6rem'],
    ['large', '4.8rem'],
    ['huge', '6.4rem'],
  ])('should render with given style', (titleSize, expectedFontSize) => {
    renderTheme(<Heading size={titleSize}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': expectedFontSize,
    });
  });

  it('should render correct font-size when screen is smaller than 768px', () => {
    renderTheme(<Heading size={'huge'}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', '4.8rem', {
      media: theme.media.medium,
    });
  });

  it('should render correct element', () => {
    const { container } = renderTheme(<Heading as={'h6'}>texto</Heading>);
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should render a text', () => {
    const { container } = renderTheme(<Heading>texto</Heading>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #FFFFFF;
        text-transform: none;
        font-size: 6.4rem;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 4.8rem;
        }
      }

      <h1
        class="c0"
      >
        texto
      </h1>
    `);
  });
});
