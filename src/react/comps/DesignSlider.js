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
import design10 from '../../ui/img/design-slides/thinksafe-1.png';
import design11 from '../../ui/img/design-slides/thinksafe-3.png';
import design12 from '../../ui/img/design-slides/thinksafe-4.png';
import design13 from '../../ui/img/design-slides/thinksafe-6.png';
import design14 from '../../ui/img/design-slides/thinksafe-8.png';
import design15 from '../../ui/img/design-slides/thinksafe-9.png';

class DesignSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
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
                    <div><img src={design10}/></div>
                    <div><img src={design11}/></div>
                    <div><img src={design12}/></div>
                    <div><img src={design13}/></div>
                    <div><img src={design14}/></div>
                    <div><img src={design15}/></div>
                </Slider>
            </div>
        );
    }
}


export default DesignSlider;