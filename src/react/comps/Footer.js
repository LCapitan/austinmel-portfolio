import React, { Component } from 'react';
import NavBtn from './NavBtn';
import Navigation from './Navigation';

class Footer extends Component {
    constructor (props) {
        super (props)

        this.state = {
            isOpen: false
        }
    }

    toggleNav = () => {
        this.setState({
            isOpen: true
        }, () => {
            this.listenForClickOutside();
        })
    }

    listenForClickOutside = () => {
        const links = document.getElementsByTagName('a');

        for (var i = 0; i < links.length; i++ ) {
            const currentLink = links[i];

            document.body.addEventListener('click', (e) => {
                const currentLinkClicked = currentLink.contains(e.target);

                if (!currentLinkClicked) {
                    this.setState({isOpen: false})
                }
            })
        }
    }
    
    render() {
        return (
            <footer className={this.state.isOpen ? 'navBgOpen' : ''}>
                <NavBtn onPress={this.toggleNav}/>
                <Navigation/>
                <div className="navBg"></div>
            </footer>
        );
    }
}

export default Footer;