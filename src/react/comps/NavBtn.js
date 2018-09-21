import React, { Component } from 'react';

class NavBtn extends Component {
    constructor (props) {
        super (props)
    }

    buttonClick = () => {
        this.props.onPress()
    }

    render() {
        return (
            <button id="menu" className='icon-rocket navBtn' onClick={this.buttonClick}></button>
        );
    }
}

export default NavBtn;