import React, { Component } from 'react';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

class Design extends Component {
    render() {
        return (
            <div className="home grid">
                <Header/>
                <div className="main-content">
                    <h1>design</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Design;