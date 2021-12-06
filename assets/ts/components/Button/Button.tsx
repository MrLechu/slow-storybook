import React from 'react'

import './Button.scss'

export interface IButtonProps {
    layout?:
        | 'primary'
        | 'primary2'
        | 'primary3'
        | 'secondary'
        | 'secondary2'
        | 'borderless'
        | 'alternative'
        | 'add'
        | 'rounded'
    type?: 'button' | 'link'
    href?: string
    loading?: boolean
    disabled?: boolean
    children: React.ReactChild
    css?: string
    displayName?: string
    onClick?: () => void
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
    (
        {
            layout = 'primary',
            loading = false,
            disabled = false,
            type,
            href,
            children,
            css,
            onClick,
        }: IButtonProps,
        ref
    ) => {
        const baseClass = type === 'button' ? 'c-btn' : 'c-link'

        const layoutClass = `${
            layout === 'primary'
                ? ' -primary'
                : layout === 'primary2'
                ? ' -primary2'
                : layout === 'primary3'
                ? ' -primary3'
                : layout === 'borderless'
                ? ' -borderless'
                : layout === 'secondary'
                ? ' -secondary'
                : layout === 'secondary2'
                ? ' -secondary2'
                : layout === 'alternative'
                ? ' -alt'
                : layout === 'add'
                ? ' -add'
                : layout === 'rounded'
                ? ' -rounded'
                : ''
        }`

        const disabledClass = `${disabled ? ' -disabled' : ''}`
        const loadingClass = `${loading ? ' -loading' : ''}`
        const extraClass = `${layoutClass + loadingClass + disabledClass}`

        const btnContent = (
            <>
                {layout === 'add' || layout === 'rounded' ? (
                    <span className="icon-arrow"></span>
                ) : (
                    ''
                )}

                {layout === 'add' ? <span className="icon-plus"></span> : ''}
                {layout === 'primary3' && ''}

                {children}

                {layout !== 'add' && layout !== 'rounded' ? (
                    <span className="icon-arrow"></span>
                ) : (
                    ''
                )}
            </>
        )

        return type === 'button' ? (
            href ? (
                <a
                    className={baseClass + ` ${css || ''}` + extraClass}
                    data-testid="button"
                    onClick={onClick}
                    href={href}
                >
                    {btnContent}
                </a>
            ) : (
                <button
                    className={baseClass + ` ${css || ''}` + extraClass}
                    data-testid="button"
                    disabled={disabled && disabled}
                    onClick={onClick}
                    ref={ref}
                >
                    {btnContent}
                </button>
            )
        ) : (
            <a
                onClick={onClick}
                href={href}
                className={baseClass + extraClass}
                data-testid="button"
            >
                {children}
            </a>
        )
    }
)

Button.displayName = ''

export default Button
