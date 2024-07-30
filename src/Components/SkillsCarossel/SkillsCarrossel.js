import React, { Component } from "react";
import Slider from "react-slick";
import './SkillsCarrossel.css';

function Carousel({ children }) {
    function Responsive() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 400,
            centerMode: false,
            variableWidth: true,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="slider__container">
                <Slider {...settings}>
                   {children}
                </Slider>
            </div>
        );
    }
}

export default Carousel;