import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="/draw">draw</a></li>
                    <li><a href="/design">design</a></li>
                    <li><a href="/develop">develop</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;