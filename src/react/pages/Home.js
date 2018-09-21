import React, { Component } from 'react';
import Astro from '../comps/Astro';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

class Home extends Component {
    render() {
        return (
            <div className="home default grid">
                <Header/>
                <div className="main-content">
                    <h1>austin</h1>
                    <Astro/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;