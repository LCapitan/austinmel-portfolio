import React, { Component } from 'react';
import ArtSlider from '../comps/ArtSlider';
import DesignSlider from '../comps/DesignSlider';
import Octo from '../../ui/img/octo-space.png';
import Header from '../comps/Header';
import Footer from '../comps/Footer';

class Draw extends Component {

    componentDidMount() {
        var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
        root.setAttribute( 'class', 'let-scroll' );
    }

    componentWillUnmount() {
        var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
        root.classList.remove( 'let-scroll' );
    }

    render() {
        return (
            <div className="draw default">
                <Header/>
                <div className="main-content">
                    <h1>art</h1>
                    <div className="octo">
                        <img src={Octo} alt=""/>
                    </div>
                    <div className="content">
                        <div>
                            <h2>Art</h2>
                            <p className="quote"><em>"As my artist's statement explains, my work is utterly incomprehensible and is therefore full of deep significance"</em></p>
                            <p className="author"> - Calvin, <em>Calvin & Hobbes</em></p>
                        </div>
                    </div>
                    <ArtSlider/>
                    <div class="content-full">
                        <h2>Design</h2>
                        <p>I started learning graphic design in the sixth grade, by the time I was a sophomore in high school I was running a side business doing photography, videography, and design; post graduation, I was working as a designer, photographer, video editor, and even voiceover artist, and now I can add developmemt to the list. I've pretty much touched on everything under the sun in the creative industry, but no matter what, I always come back to a pencil and paper. But since it's 2018, I use an iPad and Apple Pencil.</p>
                    </div>
                    <DesignSlider/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Draw;