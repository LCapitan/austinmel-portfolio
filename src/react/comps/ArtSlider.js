import React, { Component } from 'react';
import Slider from 'react-slick';
import Slide1 from '../../ui/img/art-slides/timeinatree.JPG';
import Slide2 from '../../ui/img/art-slides/aliciakeys.JPG';
import Slide3 from '../../ui/img/art-slides/gd.JPG';
import Slide4 from '../../ui/img/art-slides/lastnightinaltitude.JPG';
import Slide5 from '../../ui/img/art-slides/cellouie.JPG';
import Slide6 from '../../ui/img/art-slides/calvinhobbes.JPG';
import Slide7 from '../../ui/img/art-slides/headintheclouds.JPG';
import Slide8 from '../../ui/img/art-slides/2099.jpg';
import Slide9 from '../../ui/img/art-slides/superman.jpeg';
import Slide10 from '../../ui/img/art-slides/joker.jpeg';
import Slide11 from '../../ui/img/art-slides/tiger.jpeg';
import Slide12 from '../../ui/img/art-slides/lion.jpeg';

class ArtSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
        };

        return (
            <div className="carousel">
                <Slider {...settings}>
                    <div><img src={Slide1}/></div>
                    <div><img src={Slide2}/></div>
                    <div><img src={Slide3}/></div>
                    <div><img src={Slide4}/></div>
                    <div><img src={Slide5}/></div>
                    <div><img src={Slide6}/></div>
                    <div><img src={Slide7}/></div>
                    <div><img src={Slide8}/></div>
                    <div><img src={Slide9}/></div>
                    <div><img src={Slide10}/></div>
                    <div><img src={Slide11}/></div>
                    <div><img src={Slide12}/></div>
                </Slider>
            </div>
        );
    }
}


export default ArtSlider;