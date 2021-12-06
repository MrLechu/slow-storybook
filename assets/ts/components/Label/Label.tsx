import React, { ReactElement } from 'react'

import './Label.scss'

export interface ILabelProps {
    id: string
    name: string
    text: string
    price: number
    checked: boolean
    setValue: (id: string) => void
    additional?: boolean
}

const Label = ({
    id,
    name,
    text,
    price,
    checked,
    setValue,
    additional,
}: ILabelProps): ReactElement => {
    const handleClick = () => {
        setValue(text)
    }

    return (
        <div className="f-label" data-testid="label">
            <input
                type="radio"
                id={id}
                name={name}
                checked={checked}
                onClick={handleClick}
            />
            <label htmlFor={id}>
                <span className="f-label_text">{text}</span>
                <span className="f-label_pipe">&bull;</span>
                <span className="f-label_price">
                    {additional && '+'}
                    {price}zł
                </span>
            </label>
        </div>
    )
}

export default Label
