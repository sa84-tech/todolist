import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodosDetailsPage } from './TodosDetailsPage';

export default {
    title: 'pages/TodosDetailsPage',
    component: TodosDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TodosDetailsPage>;

const Template: ComponentStory<typeof TodosDetailsPage> = (args) => <TodosDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};