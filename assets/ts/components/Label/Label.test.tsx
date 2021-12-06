import React from 'react'
import { render, screen } from 'test-utils'
import Label from './Label'

const props = {
    text: '1200 kcal',
    name: '1200 kcal',
    price: 39,
    id: 'test',
    checked: true,
    setValue: () => {
        return true
    },
}

test('component renders correctly', () => {
    render(<Label {...props} />)
    expect(screen.getByTestId('label')).toBeInTheDocument()
})
