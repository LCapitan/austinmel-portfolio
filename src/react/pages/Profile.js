import React, { Component } from 'react';
import Balloon from '../comps/Balloon';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

class Profile extends Component {
    render() {
        return (
            <div className="about default">
                <Header/>
                <div className="main-content">
                    <h1>about</h1>
                    <Balloon/>
                    <div className="content">
                        <div>
                            <h2>Greetings,</h2>
                            <p>My name is Austin. I'm a New England native who's currently soaking in the glory that is South Florida. I’m a passionate artist, designer & developer, and I may add some more to that list down the road. I've been drawing ever since I could remember, and began learning the ins and outs of Adobe's Creative Suite about twelve years ago. Once I had the technical skills of drawing and design mastered, I was looking for a new creative challenge and began to learn how to code.</p>
                            <p>I currently work as a <em>Creative Technologist</em> for <a href="https://theprimacy.com" target="_blank">Primacy</a>, a great digital marketing agency in West Palm Beach, and prior to that I worked at <a href="https://www.travelers.com/" target="_blank">Travelers Insurance</a> as a member of their <em>Creative Services</em> team.</p>
                            <p>Aside from drawing or coding, my hobbies include taking my longboard out to the beach, writing and listening to music, and occasionally watching sports - in the interest of making enemies, go Sox and go Cowboys!</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Profile;