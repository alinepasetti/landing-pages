import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
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
      type: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
