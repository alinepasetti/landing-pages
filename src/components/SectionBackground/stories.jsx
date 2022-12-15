import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
          efficitur ex. Donec viverra neque quis velit convallis scelerisque.
          Etiam iaculis, ligula quis aliquet posuere, eros enim vestibulum
          risus, fermentum tempus augue lorem nec ex.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
