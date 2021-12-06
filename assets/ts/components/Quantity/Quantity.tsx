import React, { ReactElement, useState, useEffect } from 'react'

import './Quantity.scss'

export interface IQuantityProps {
    cb?: (value: number, action: string) => void
    initialValue: number
}

const Quantity = ({ cb, initialValue }: IQuantityProps): ReactElement => {
    const [value, setValue] = useState<number>(initialValue ? initialValue : 0)
    const [action, setAction] = useState<string>('InitialValue')

    useEffect(() => {
        cb && cb(value, action)
    }, [value])

    const handleClick = (action: 'increase' | 'decrease') => {
        const oldValue = value
        const newValue = action === 'increase' ? oldValue + 1 : oldValue - 1
        newValue > oldValue ? setAction('Add') : setAction('Remove')
        setValue(newValue)
    }

    return (
        <div className="f-quantity">
            <button
                className="f-quantity_button -minus"
                onClick={() => handleClick('decrease')}
                type="button"
                disabled={value === 0 ? true : false}
            >
                &bull;
            </button>
            <input
                className="f-quantity_value"
                disabled
                value={initialValue ? initialValue : value}
            />
            <button
                className="f-quantity_button -plus"
                onClick={() => handleClick('increase')}
                type="button"
            >
                &bull;
            </button>
        </div>
    )
}

export default Quantity
