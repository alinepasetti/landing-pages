import { Menu } from '.';
import linksMock from '../NavLinks/mock';
export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImage: '',
    },
  },
  argTypes: {},
};

export const Template = (args) => {
  return (
    <div style={{ background: 'gray', height: '300vh' }}>
      <Menu {...args} />
    </div>
  );
};
