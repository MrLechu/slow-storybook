import React from 'react'
import { Story, Meta } from '@storybook/react'

import Quantity, { IQuantityProps } from './Quantity'

export default {
    title: 'Form/Quantity',
    component: Quantity,
} as Meta

const Template: Story<IQuantityProps> = (args) => <Quantity {...args} />

export const Default = Template.bind({})
