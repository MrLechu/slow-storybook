import React from 'react'
import { render, screen } from 'test-utils'
import RadioGroup from './RadioGroup'

const props = {
    options: [
        { id: '1500 kcal', text: '1500 kcal', price: 39 },
        { id: '2000 kcal', text: '2000 kcal', price: 59 },
        { id: '2500 kcal', text: '2500 kcal', price: 89 },
    ],
    name: 'exampleRadioGroup',
    setValue: () => {
        return true
    },
}

test('component renders correctly', () => {
    render(<RadioGroup {...props} />)
    expect(screen.getByTestId('radioGroup')).toBeInTheDocument()
})
