import Button from '../Button/Button'
import React, { ReactElement, useRef, useState } from 'react'

import './Input.scss'

export interface IInputProps {
    type: 'text' | 'password' | 'email'
    id: string
    label?: string
    placeholder?: string
    disabled?: boolean
    isValid?: boolean
    isInvalid?: boolean
    validationText?: string
}

const Input = ({
    type,
    placeholder,
    id,
    label,
    disabled,
    isValid,
    isInvalid,
    validationText,
}: IInputProps): ReactElement => {
    const baseClass = `-${type}`

    const disabledClass = `${disabled ? ' -disabled' : ''}`
    const isValidClass = `${
        isValid ? ' -isValid' : isInvalid ? ' -isInvalid' : ''
    }`

    const [exposePassword, setExposePassword] = useState<boolean>(false)
    const exposePasswordClass = exposePassword ? ' -exposedPassword' : ''

    const extraClass = `${disabledClass + isValidClass + exposePasswordClass}`
    const thisInput = useRef<HTMLInputElement>(null)

    const showPassword = () => {
        const input = thisInput.current
        if (type === 'password') {
            if (input) {
                if (input.type === 'password') {
                    input.type = 'text'
                    setExposePassword(true)
                } else {
                    input.type = 'password'
                    setExposePassword(false)
                }
            }
        }
    }

    return (
        <div
            className={`f-group ${baseClass + extraClass}`}
            data-testid="input"
        >
            {type === 'text' ||
                (type === 'password' && <label htmlFor={id}>{label}</label>) ||
                (type === 'email' && <label htmlFor={id}>{label}</label>)}
            <span className="f-group_inner">
                {(isInvalid || isValid) && (
                    <span className="c-ico -validation" onClick={showPassword}>
                        &bull;
                    </span>
                )}

                <span className="c-ico" onClick={showPassword}>
                    &bull;
                </span>

                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    ref={thisInput}
                />
                {type !== 'text' && type !== 'password' && type !== 'email' && (
                    <label htmlFor={id}>{label}</label>
                )}
            </span>
            {isInvalid && (
                <span className="f-group_bottom">
                    <span className="f-group_error">{validationText}</span>

                    {type === 'password' && (
                        <Button type="link" href="#" layout="secondary">
                            Zapomniałem hasła
                        </Button>
                    )}
                </span>
            )}
        </div>
    )
}

export default Input
