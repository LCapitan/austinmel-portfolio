import React, { Component } from 'react';
import Astro from '../comps/Astro';
import Header from '../comps/Header';
import Footer from '../comps/Footer';
import Logo from '../comps/Logo';

class Home extends Component {
    render() {
        return (
            <div className="home default">
                <Header/>
                <div className="main-content">
                    <div className="mobile logo-m">
                        <Logo/>
                    </div>
                    <h1>austin</h1>
                    <Astro/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;