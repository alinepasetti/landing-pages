import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContent />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <GridContent title={mock.title} html={mock.html} />,
    );
    expect(container).toMatchSnapshot();
  });
});
