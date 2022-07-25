import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: 'Hello World',
};
