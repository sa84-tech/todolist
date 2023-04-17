import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableTodoCard } from './EditableTodoCard';

export default {
    title: 'features/EditableTodoCard',
    component: EditableTodoCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableTodoCard>;

const Template: ComponentStory<typeof EditableTodoCard> = (args) => <EditableTodoCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};