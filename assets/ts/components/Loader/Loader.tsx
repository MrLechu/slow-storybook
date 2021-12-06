import React, { ReactElement } from 'react'

import './Loader.scss'

export interface ILoaderProps {
    mode?: 'fullscreen' | 'inline'
}

const Loader = ({ mode = 'fullscreen' }: ILoaderProps): ReactElement => {
    return (
        <div
            className={`c-loader ${mode === 'inline' ? '-inline' : ''}`}
            data-testid="loader"
        >
            <div className="icon-loading"></div>
        </div>
    )
}

export default Loader
