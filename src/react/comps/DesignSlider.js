import React, { Component } from 'react';
import Slider from 'react-slick';
import design1 from '../../ui/img/art-slides/timeinatree.JPG';
import design2 from '../../ui/img/art-slides/aliciakeys.JPG';
import design3 from '../../ui/img/art-slides/gd.JPG';
import design4 from '../../ui/img/art-slides/lastnightinaltitude.JPG';
import design5 from '../../ui/img/art-slides/cellouie.JPG';
import design6 from '../../ui/img/art-slides/calvinhobbes.JPG';
import design7 from '../../ui/img/art-slides/headintheclouds.JPG';
import design8 from '../../ui/img/art-slides/astro-space.jpg';
import design9 from '../../ui/img/art-slides/fly.jpg';

class DesignSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            autoplaySpeed: 4000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="design-carousel">
                <Slider {...settings}>
                    <div><img src={design1}/></div>
                    <div><img src={design2}/></div>
                    <div><img src={design3}/></div>
                    <div><img src={design4}/></div>
                    <div><img src={design5}/></div>
                    <div><img src={design6}/></div>
                    <div><img src={design7}/></div>
                    <div><img src={design8}/></div>
                    <div><img src={design9}/></div>
                </Slider>
            </div>
        );
    }
}


export default DesignSlider;