import React from 'react'
import { Story, Meta } from '@storybook/react'

import RadioGroup, { IRadioGroupProps } from './RadioGroup'

export default {
    title: 'RadioGroup',
    component: RadioGroup,
} as Meta

const Template: Story<IRadioGroupProps> = (props) => <RadioGroup {...props} />

export const Default = Template.bind({})

Default.args = {
    options: [
        { id: '1500 kcal', text: '1500 kcal', price: 39 },
        { id: '2000 kcal', text: '2000 kcal', price: 59 },
        { id: '2500 kcal', text: '2500 kcal', price: 89 },
    ],
    name: 'exampleRadioGroup',
}
