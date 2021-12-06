import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input, { IInputProps } from './Input'

export default {
    title: 'Form/Input',
    component: Input,
} as Meta

const Template: Story<IInputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
    type: 'text',
    id: 'text',
    label: 'text',
}
