import React, { Component } from 'react';
import Slider from 'react-slick';
import Slide1 from '../../ui/img/design-slides/thinksafe-1.png';
import Slide2 from '../../ui/img/design-slides/thinksafe-3.png';
import Slide3 from '../../ui/img/design-slides/thinksafe-4.png';
import Slide4 from '../../ui/img/design-slides/thinksafe-5.png';
import Slide5 from '../../ui/img/design-slides/thinksafe-6.png';
import Slide6 from '../../ui/img/design-slides/thinksafe-7.png';
import Slide7 from '../../ui/img/design-slides/thinksafe-8.png';
import Slide8 from '../../ui/img/design-slides/thinksafe-9.png';
import Slide9 from '../../ui/img/design-slides/thinksafe-10.png';
import Slide10 from '../../ui/img/design-slides/thinksafe-11.png';
import Slide11 from '../../ui/img/design-slides/thinksafe-12.png';
import Slide12 from '../../ui/img/design-slides/thinksafe-13.png';

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


export default DesignSlider;