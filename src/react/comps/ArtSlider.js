import React, { Component } from 'react';
import Slider from 'react-slick';
import art1 from '../../ui/img/art-slides/2099.jpg';
import art2 from '../../ui/img/art-slides/20992.jpg';
import art3 from '../../ui/img/art-slides/20993.jpg';
import art4 from '../../ui/img/art-slides/deadpool.jpg';
import art5 from '../../ui/img/art-slides/silversurfer.jpg';
import art6 from '../../ui/img/art-slides/superman.jpeg';
import art7 from '../../ui/img/art-slides/joker.jpeg';
import art8 from '../../ui/img/art-slides/tiger.jpeg';
import art9 from '../../ui/img/art-slides/lion.jpeg';

class ArtSlider extends Component {
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
            <div className="art-carousel">
                <Slider {...settings}>
                    <div><img src={art1}/></div>
                    <div><img src={art2}/></div>
                    <div><img src={art3}/></div>
                    <div><img src={art4}/></div>
                    <div><img src={art5}/></div>
                    <div><img src={art6}/></div>
                    <div><img src={art7}/></div>
                    <div><img src={art8}/></div>
                    <div><img src={art9}/></div>
                </Slider>
            </div>
        );
    }
}


export default ArtSlider;