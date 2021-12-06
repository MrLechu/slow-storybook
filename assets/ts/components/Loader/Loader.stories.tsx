import React from 'react'
import { Story, Meta } from '@storybook/react'

import Loader, { ILoaderProps } from './Loader'

export default {
    title: 'Creator/Loader',
    component: Loader,
} as Meta

const Template: Story<ILoaderProps> = (props) => <Loader {...props} />

export const Default = Template.bind({})

Default.args = {}
