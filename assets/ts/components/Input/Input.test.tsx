import React from 'react'
import { render, screen } from 'test-utils'
import Input, { IInputProps } from './Input'

const props: IInputProps = {
    type: 'text',
    id: 'text',
    label: 'text',
}

test('component renders correctly', () => {
    render(<Input {...props} />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
})
