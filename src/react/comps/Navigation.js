import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="/draw">art</a></li>
                    <li><a href="/develop">code</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;