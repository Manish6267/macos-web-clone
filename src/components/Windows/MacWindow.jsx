
import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children, width = "40vw", height = "40vh", windowName, setWindowsState }) => {
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
                        <button
                            type="button"
                            onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))}
                            className="dot red"
                            aria-label="Close window"
                        >
                            <span className="dot-symbol">x</span>
                        </button>
                        <button type="button" className="dot yellow" aria-label="Minimize window">
                            <span className="dot-symbol">-</span>
                        </button>
                        <button type="button" className="dot green" aria-label="Maximize window">
                            <span className="dot-symbol">+</span>
                        </button>
                    </div>

                    <div className="title"><p>Manishkumar - zsh</p></div>

                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow
