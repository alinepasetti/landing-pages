import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
      efficitur ex. Donec viverra neque quis velit convallis scelerisque.
      Etiam iaculis, ligula quis aliquet posuere, eros enim vestibulum risus,
      fermentum tempus augue lorem nec ex. Fusce fringilla nisl nec odio
      commodo accumsan. Proin placerat euismod quam, in convallis mauris
      eleifend pharetra. In sodales ultricies augue, nec finibus nisl aliquet
      et. Nam rhoncus quam non lobortis finibus`,
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
      <TextComponent {...args} />
    </div>
  );
};
