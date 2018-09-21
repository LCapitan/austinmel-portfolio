import React, { Component } from 'react';
import AstroGame from '../comps/AstroGame';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

class Draw extends Component {
    render() {
        return (
            <div className="art default grid">
                <Header/>
                <div className="main-content">
                    <h1>art</h1>
                    <AstroGame/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Draw;