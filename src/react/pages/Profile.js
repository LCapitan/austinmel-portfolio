import React, { Component } from 'react';
import Balloon from '../comps/Balloon';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

class Profile extends Component {
    render() {
        return (
            <div className="about default grid">
                <Header/>
                <div className="main-content">
                    <h1>about</h1>
                    <Balloon/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Profile;