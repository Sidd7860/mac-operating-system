import React from 'react'
import { Rnd } from 'react-rnd'
import './windows.scss'


const MacWindow = ({ children, width = "40vw", height = "40vh", windowName, windows, setwindows }) => {
    return (
        <Rnd
            default={{
                width: width,
                height: height,
                x: 300,
                y: 200
            }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div onClick={() => setwindows(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <div className="title"><p>Zibran Ahmed Siddiqui - zsh</p></div>

                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow