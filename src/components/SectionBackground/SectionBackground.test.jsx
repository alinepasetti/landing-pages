import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render with light background', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with dark background', () => {
    const { container } = renderTheme(
      <SectionBackground background={false}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
