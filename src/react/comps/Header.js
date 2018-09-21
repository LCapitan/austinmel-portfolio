import React, { Component } from 'react';
import AboutBtn from './AboutBtn';
import Logo from './Logo';

class Header extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li>
                        <AboutBtn/>
                    </li>
                    <li>
                        <Logo/>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;