import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableTodolistCard } from './EditableTodolistCard';

export default {
    title: 'features/EditableTodolistCard',
    component: EditableTodolistCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableTodolistCard>;

const Template: ComponentStory<typeof EditableTodolistCard> = (args) => <EditableTodolistCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};