import React, { Component } from 'react';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

class Develop extends Component {
    render() {
        return (
            <div className="home default grid">
                <Header/>
                <div className="main-content">
                    <h1>code</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Develop;