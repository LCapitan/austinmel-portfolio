import React, { Component } from 'react';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

class Draw extends Component {
    render() {
        return (
            <div className="home grid">
                <Header/>
                <div className="main-content">
                    <h1>draw</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Draw;