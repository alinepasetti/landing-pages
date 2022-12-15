import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render', () => {
    const { contaner } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(contaner).toMatchSnapshot();
  });
});
