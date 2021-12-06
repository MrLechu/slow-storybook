import React, { ReactElement } from 'react'

import Label from '../Label/Label'

import './RadioGroup.scss'

export interface IRadioOption {
    id: string
    text: string
    price: number
}

export interface IRadioGroupProps {
    options: IRadioOption[]
    name: string
    value?: string
    setValue: (id: string) => void
    vertical?: boolean
    additional?: boolean
}

const RadioGroup = ({
    options,
    name,
    value,
    setValue,
    vertical,
    additional,
}: IRadioGroupProps): ReactElement => {
    return (
        <div
            className={`c-radioGroup -dt8md ${vertical ? '-vertical' : ''}`}
            data-testid="radioGroup"
        >
            {options.map(({ text, price }) => {
                return (
                    <Label
                        key={text}
                        text={text}
                        price={price}
                        name={name}
                        id={text}
                        checked={value === text || false}
                        setValue={setValue}
                        additional={additional}
                    />
                )
            })}
        </div>
    )
}

export default RadioGroup
