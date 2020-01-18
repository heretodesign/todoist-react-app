import React from 'react'
import {faPizzaSlice} from 'react-icons/fa'

export const Header = () => {

    const x =1;

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li><faPizzaSlice /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
