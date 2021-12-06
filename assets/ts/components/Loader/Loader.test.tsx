import React from 'react'
import { render, screen } from 'test-utils'

import Loader from './Loader'

const props = {}

test('component renders correctly', () => {
    render(<Loader {...props} />)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
})
