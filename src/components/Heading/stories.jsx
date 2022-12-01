import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'olá',
  },
  argTypes: { children: { type: 'string' } },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={false} />;
